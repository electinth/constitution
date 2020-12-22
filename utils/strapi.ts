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
  id: string;
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
  id: string;
  name: string;
  content: string;
  topics: TopicOverview[];
}

export interface Category {
  id: number;
  name: string;
  color: string;
  content: string;
  subcategories: SubCategory[];
}

const strapiEndpoint = process.env.STRAPI_ENDPOINT || MSW_ENDPOINT;

const get = async <T>(path: string): Promise<T> => {
  const { data } = await axios.get(`${strapiEndpoint}${path}`);
  return data;
};

export const getCategoryById = (id: string): Promise<Category> =>
  get<Category>(`/categories/${id}`);

export const getTopicsByCategoryId = (id: string): Promise<Topic[]> =>
  get<Topic[]>(`/topics?category_id=${id}`);
