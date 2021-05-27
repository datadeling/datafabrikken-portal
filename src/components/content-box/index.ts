import ContentBoxSC from './components/content-box/styled';
import ContentBoxHeaderSC from './components/content-box-header/styled';

export { default as ContentBox } from './components/content-box';

export {
  default as ContentBoxHeader,
  Variant as TitleVariant
} from './components/content-box-header';

export { default as ContextBoxBody } from './components/content-box-body';

export const SC = {
  ContentBox: ContentBoxSC,
  ContentBoxHeader: ContentBoxHeaderSC
};
