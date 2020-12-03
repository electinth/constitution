import { rest } from 'msw';
import categories from './data/categories.json';
import categoryById from './data/category-by-id.json';
import topicByCategoryId from './data/topic-by-category-id.json';

export const handlers = [
  rest.get('/categories', (_req, res, ctx) => res(ctx.json(categories))),

  rest.get('/categories/:id', (req, res, ctx) =>
    res(
      ctx.json({
        ...categoryById,
        id: +req.params.id,
      })
    )
  ),

  rest.get('/topics', (req, res, ctx) => {
    const categoryId = req.url.searchParams.get('category_id');

    if (!categoryId) {
      return res(
        ctx.status(400),
        ctx.json({ message: 'category_id parameter is required' })
      );
    }

    return res(
      ctx.json({
        ...topicByCategoryId,
        category_id: +categoryId,
      })
    );
  }),
];
