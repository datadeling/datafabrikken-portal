import styled, { css } from 'styled-components';
import { Colour, theme } from '../../../../../entrypoints/main/app/theme';

import CommentIconBase from '../../../../../images/comment-icon.inline.svg';

const onMobileView = '@media (max-width: 900px)';

const CommentCard = styled.li<{ $isReply: boolean }>`
  border-radius: 5px;
  background-color: ${({ $isReply }) =>
    $isReply
      ? theme.colour(Colour.NEUTRAL, 'N15')
      : theme.colour(Colour.NEUTRAL, 'N0')};
  padding: ${theme.spacing('S16')};
  margin: ${theme.spacing('S8')} 0;

  & img {
    display: inline;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  & .emoji {
    height: 20px;
    width: 20px;
    display: inline;
    vertical-align: text-top;
  }

  ${onMobileView} {
    padding: ${theme.spacing('S8')};
    margin: ${theme.spacing('S6')} 0;
  }
`;

const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing('S16')};

  ${onMobileView} {
    flex-direction: column;
  }
`;

const CommentActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${theme.spacing('S16')};
  ${onMobileView} {
    margin-top: ${theme.spacing('S8')};
    flex-wrap: wrap;
  }
`;

const ButtonContainer = styled.span`
  display: flex;
  ${onMobileView} {
    flex-basis: 40%;
    & > button {
      margin-top: ${theme.spacing('S16')};
    }
  }
`;

const IconStyle = css`
  height: 15px;
  width: 15px;
`;

const CommentIcon = styled(CommentIconBase)`
  ${IconStyle}
  margin-left: ${theme.spacing('S4')};
  & path {
    stroke: ${theme.colour(Colour.NEUTRAL, 'N70')};
  }
`;
const Spacing4 = styled.div`
  margin: ${theme.spacing('S4')};
`;

export default {
  CommentCard,
  CommentInfo,
  CommentActions,
  ButtonContainer,
  CommentIcon,
  Spacing4
};
