import { rest } from 'msw';
import categories from './data/categories.json';

export const handlers = [
  rest.get('/categories', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categories));
  }),
];
