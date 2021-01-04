# constitution

Thailand's Constitution, explained

## Deployment

- Staging: https://elect-reconstitution.netlify.app/
  [![Netlify Status](https://api.netlify.com/api/v1/badges/bdcf56d4-7384-4117-a39e-883f8ed65bde/deploy-status)](https://app.netlify.com/sites/elect-reconstitution/deploys)
- Production: https://recon.elect.in.th/

## Environment

.env file can be used to config Starpi api endpoint. If not specify mock data will be used with msw.

```
STRAPI_ENDPOINT=<url_to_strapi>
STRAPI_TOKEN=<strapi_token>
BASE_PATH=<site_path_when_deploy>
SITE_URL=<site_url_when_deploy>
GOOGLE_ANALYTICS_ID=<G-XXXXXXX>
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
