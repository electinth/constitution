import {
  MetaInfo,
  MetaPropertyCharset,
  MetaPropertyEquiv,
  MetaPropertyName,
  MetaPropertyMicrodata,
  MetaPropertyProperty,
} from 'vue-meta';

type MetaProperty =
  | MetaPropertyCharset
  | MetaPropertyEquiv
  | MetaPropertyName
  | MetaPropertyMicrodata
  | MetaPropertyProperty;

interface GenerateHeadTagsProps {
  title?: string;
  description?: string;
  image?: string;
}

const generateMetas = (properties: string[], content: string) =>
  properties.map(
    (property): MetaPropertyProperty => ({ hid: property, property, content })
  );

export const generateHeadTags = (
  { title, description, image }: GenerateHeadTagsProps,
  combindedMeta: MetaProperty[] = []
): MetaInfo => {
  const head: MetaInfo = {};
  const meta: MetaProperty[] = [...combindedMeta];

  if (title) {
    head.title = title;
    meta.push(...generateMetas(['title', 'og:title', 'twitter:title'], title));
  }

  if (description) {
    meta.push(
      ...generateMetas(
        ['description', 'og:description', 'twitter:description'],
        description
      )
    );
  }

  if (image) {
    meta.push(...generateMetas(['og:image', 'twitter:image'], image));
  }

  return {
    ...head,
    meta,
  };
};
