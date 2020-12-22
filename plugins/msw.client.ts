import { Context } from '@nuxt/types';

export default ({ isDev }: Context) => {
  if (isDev && !process.env.STRAPI_ENDPOINT) {
    const { worker } = require('../mocks/browser.ts');

    worker.start();
  }
};
