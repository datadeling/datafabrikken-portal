import {
  ComponentBasicInfobox,
  ComponentBasicParagraph
} from '../../services/api/generated/cms/graphql';

export function isBasicParagraph(obj?: any): obj is ComponentBasicParagraph {
  return obj && obj?.__typename === 'ComponentBasicParagraph' && obj?.content;
}

export function isBasicInfoBox(obj?: any): obj is ComponentBasicInfobox {
  return obj && obj?.__typename === 'ComponentBasicInfobox';
}
