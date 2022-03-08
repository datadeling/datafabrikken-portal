import styled, { css } from 'styled-components';

import { theme, Colour } from '../../../../../entrypoints/main/app/theme';

import BoldIconBase from '../../../../../images/compose-bold.inline.svg';
import ItalicIconBase from '../../../../../images/compose-italic.inline.svg';
import BulletListIconBase from '../../../../../images/compose-bulletlist.inline.svg';
import ImageIconBase from '../../../../../images/compose-image.inline.svg';
import UserIconBase from '../../../../../images/compose-tag-user.inline.svg';
import StrikethroughIconBase from '../../../../../images/compose-strikethrough.inline.svg';
import CodeIconBase from '../../../../../images/compose-code.inline.svg';
import LinkIconBase from '../../../../../images/compose-link.inline.svg';

import LogOutSC from '../logOut/styled';

const onMobileView = '@media (max-width: 900px)';

const PostCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: ${theme.spacing('S16')};

  & > textarea {
    width: 100%;
    margin-bottom: ${theme.spacing('S16')};
  }
`;

const PostCommentButtons = styled.div`
  display: flex;
  & > button {
    margin-right: ${theme.spacing('S16')};
  }
`;

const ToolsContainer = styled.div`
  display: flex;
`;

const ToolButton = styled.button`
  height: 30px;
  width: 30px;
  background: ${theme.colour(Colour.NEUTRAL, 'N0')};
  border: 1px solid ${theme.colour(Colour.NEUTRAL, 'N0')};
  padding: ${theme.spacing('S4')};
  display: flex;
  align-items: center;
  &:hover {
    background: ${theme.colour(Colour.NEUTRAL, 'N20')};
    border: 1px solid ${theme.colour(Colour.NEUTRAL, 'N20')};
  }
`;

const SmallText = styled.p`
  font-size: ${theme.fontSize('FS14')};
  margin-bottom: ${theme.spacing('S8')};
`;

const IconStyle = css`
  height: 20px;
  width: 20px;
`;

const BoldIcon = styled(BoldIconBase)`
  ${IconStyle}
`;

const ItalicIcon = styled(ItalicIconBase)`
  ${IconStyle}
`;

const BulletListIcon = styled(BulletListIconBase)`
  ${IconStyle}
`;

const ImageIcon = styled(ImageIconBase)`
  ${IconStyle}
`;

const UserIcon = styled(UserIconBase)`
  ${IconStyle}
`;

const StrikethroughIcon = styled(StrikethroughIconBase)`
  ${IconStyle}
`;

const CodeIcon = styled(CodeIconBase)`
  ${IconStyle}
`;

const LinkIcon = styled(LinkIconBase)`
  ${IconStyle}
`;

const ComposerHeader = styled.div`
  display: flex;
  padding-bottom: ${theme.spacing('S8')};
  gap: ${theme.spacing('S24')};

  ${onMobileView} {
    gap: ${theme.spacing('S8')};
    flex-direction: column-reverse;
  }

  & > ${LogOutSC.LogOutContainer} {
    font-size: ${theme.fontSize('FS10')};
  }
`;

export default {
  PostCommentContainer,
  PostCommentButtons,
  ToolsContainer,
  ToolButton,
  SmallText,
  BoldIcon,
  ItalicIcon,
  BulletListIcon,
  ImageIcon,
  UserIcon,
  StrikethroughIcon,
  CodeIcon,
  LinkIcon,
  ComposerHeader
};
