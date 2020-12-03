if (!process.env.STRAPI_ENDPOINT) {
  const { server } = require('../mocks/server.ts');

  server.listen();
}
