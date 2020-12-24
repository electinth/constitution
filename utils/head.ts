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

const TITLE_POSTFIX = 'Reconstitution ฐานข้อมูลรัฐธรรมนูญไทยออนไลน์';

const generateMetas = (properties: string[], content: string) =>
  properties.map(
    (property): MetaPropertyProperty => ({ hid: property, property, content })
  );

export const generateHeadTags = (
  { title, description, image }: GenerateHeadTagsProps,
  combindedMeta: MetaProperty[] = []
): MetaInfo => {
  const meta: MetaProperty[] = [...combindedMeta];

  meta.push(
    ...generateMetas(
      ['title', 'og:title', 'twitter:title'],
      title ? `${title} - ${TITLE_POSTFIX}` : TITLE_POSTFIX
    )
  );

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
    title: title || TITLE_POSTFIX,
    meta,
  };
};
