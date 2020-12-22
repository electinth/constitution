import { rest } from 'msw';
import categoryById from './data/category-by-id.json';
import topicsByCategoryId from './data/topics-by-category-id.json';

export const MSW_ENDPOINT = 'http://msw.local';

export const handlers = [
  rest.get(MSW_ENDPOINT + '/categories/:id', (req, res, ctx) =>
    res(
      ctx.json({
        ...categoryById,
        id: req.params.id,
      })
    )
  ),

  rest.get(MSW_ENDPOINT + '/topics', (req, res, ctx) => {
    const categoryId = req.url.searchParams.get('category_id');

    if (!categoryId) {
      return res(
        ctx.status(400),
        ctx.json({ message: 'category_id parameter is required' })
      );
    }

    return res(
      ctx.json(
        topicsByCategoryId.map((topic) => ({
          ...topic,
          category_id: +categoryId,
        }))
      )
    );
  }),
];
