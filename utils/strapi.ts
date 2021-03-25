import axios from 'axios';
import { MSW_ENDPOINT } from '../mocks/handlers';
import constitutions from '../data/constitutions.json';

interface RawSection {
  id: number;
  section_id: string;
}
export interface Section {
  id: string;
  content: string;
  chapterId?: number;
  chapterName?: string;
  partId?: number;
  partName?: string;
  amendmentIds?: number[];
}

export interface Amendment {
  id: number;
  type: string;
  affectedSectionId: number;
  content: string;
  affectedBy: string;
  remark: string;
}

interface RawConstitution {
  id: number;
  constitution_id: string;
  sections?: RawSection[];
}
export interface Constitution {
  id: string;
  name: string;
  prelude: string;
  sections: Section[];
  amendments?: Amendment[];
}

export interface Opinion {
  id: number;
  speaker_name: string;
  speaker_position: string;
  speaker_image: string;
  content: string;
}

export interface TopicOverview {
  id: number;
  name: string;
  image: string;
  thumbnail_image: string;
}

interface BaseTopic extends TopicOverview {
  category_id: string;
  category_name: string;
  subcategory_id: number;
  subcategory_name: string;
  summary: string;
  options: Opinion[];
  og_image: string;
}
interface RawTopic extends BaseTopic {
  constitutions: RawConstitution[];
}

export interface Topic extends BaseTopic {
  constitutions: Constitution[];
}

export interface SubCategory {
  id: number;
  sub_category_id: string;
  name: string;
  content: string;
  topics: TopicOverview[];
}

export interface Category {
  id: number;
  category_id: string;
  name: string;
  color: string;
  content: string;
  sub_categories: SubCategory[];
}

const strapiEndpoint = process.env.STRAPI_ENDPOINT || MSW_ENDPOINT;

const parseConstitution = ({
  constitution_id,
  sections,
}: RawConstitution): Constitution | null => {
  const constitution = constitutions.find(
    (constitution) =>
      constitution_id === constitution.id &&
      sections?.length &&
      constitution.sections.some(
        ({ id }: Section) => id === sections[0].section_id
      )
  );

  if (!constitution) {
    return null;
  }

  const { id, name = '', prelude } = constitution;

  return {
    id,
    name,
    prelude,
    sections: sections
      ? sections.reduce<Section[]>((list, { section_id }) => {
          const section = (constitution.sections as Section[]).find(
            ({ id }) => section_id === id
          );
          return section ? [...list, section] : list;
        }, [])
      : [],
  };
};

const parseRawTopic = ({ constitutions, ...rest }: RawTopic): Topic => ({
  ...rest,
  constitutions: constitutions.reduce<Constitution[]>(
    (list, rawConstitution) => {
      const constitution = parseConstitution(rawConstitution);
      return constitution ? [...list, constitution] : list;
    },
    []
  ),
});

const get = async <T>(path: string): Promise<T> => {
  const { data } = await axios.get(
    `${strapiEndpoint}${path}`,
    process.env.STRAPI_TOKEN
      ? {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        }
      : {}
  );

  return data;
};

export const getCategoryById = async (id: string): Promise<Category> =>
  (await get<Category[]>(`/categories?category_id=${id}`))[0];

export const getAllTopics = async (): Promise<Topic[]> => {
  const rawTopics = await get<RawTopic[]>(`/topics`);
  return rawTopics.map(parseRawTopic);
};

export const getTopicById = async (id: string): Promise<Topic> => {
  const rawTopic = await get<RawTopic>(`/topics/${id}`);
  return parseRawTopic(rawTopic);
};
