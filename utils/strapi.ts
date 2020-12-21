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

export interface CategoryOverview {
  id: number;
  name: string;
  color: string;
}

export interface Category extends CategoryOverview {
  content: string;
  subcategories: SubCategory[];
}

const strapiEndpoint = process.env.STRAPI_ENDPOINT || process.env.MSW_ENDPOINT;

const get = async <T>(path: string): Promise<T> => {
  const response = await fetch(`${strapiEndpoint}${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export const getAllCategories = (): Promise<CategoryOverview[]> =>
  get<CategoryOverview[]>('/categories');

export const getCategoryById = (id: string): Promise<Category> =>
  get<Category>(`/categories/${id}`);

export const getTopicsByCategoryId = (id: string): Promise<Topic[]> =>
  get<Topic[]>(`/topics?category_id=${id}`);
