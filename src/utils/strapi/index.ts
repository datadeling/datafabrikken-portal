import { ComponentBasicParagraph } from '../../services/api/generated/cms/graphql';

export function isComponentBasicParagraph(
  obj?: any
): obj is ComponentBasicParagraph {
  return !!obj && obj?.__typename === 'ComponentBasicParagraph' && obj?.content;
}
