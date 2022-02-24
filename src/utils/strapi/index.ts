import {
  ComponentBasicInfobox,
  ComponentBasicParagraph,
  Provider
} from '../../services/api/generated/cms/graphql';

export function isBasicParagraph(obj?: any): obj is ComponentBasicParagraph {
  return obj && obj?.__typename === 'ComponentBasicParagraph' && obj?.content;
}

export function isBasicInfoBox(obj?: any): obj is ComponentBasicInfobox {
  return obj && obj?.__typename === 'ComponentBasicInfobox';
}

export function isProvider(obj?: any): obj is Provider {
  return obj && obj?.__typename === 'Provider' && obj.id && obj.title;
}
