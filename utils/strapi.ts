import axios from 'axios';
import { MSW_ENDPOINT } from '../mocks/handlers';

export interface Section {
  id: number;
  content: string;
  chapterId: number;
  chapterName: string;
  partId: number | null;
  partName: string | null;
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

export interface Constitution {
  id: string;
  name: string;
  prelude: string;
  sections: Section[];
  amendments: Amendment[];
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

export interface Topic extends TopicOverview {
  category_id: string;
  category_name: string;
  subcategory_id: number;
  subcategory_name: string;
  summary: string;
  constitutions: Constitution[];
  options: Opinion[];
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

export const getTopicsByCategoryId = (id: string): Promise<Topic[]> =>
  get<Topic[]>(`/topics?category_id=${id}`);

export const getAllTopics = (): Promise<Topic[]> => get<Topic[]>(`/topics`);

export const getTopicById = (id: string): Promise<Topic> =>
  get<Topic>(`/topics/${id}`);
