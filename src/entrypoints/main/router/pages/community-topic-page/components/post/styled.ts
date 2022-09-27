import styled, { css } from 'styled-components';

import { theme, Colour } from '../../../../../app/theme';

const onMobileView = '@media (max-width: 900px)';

const Post = styled.div<{ $calendarPost: boolean }>`
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSize('FS10')};
  color: ${theme.colour(Colour.BLUE, 'B52')};
  padding: ${theme.spacing('S24')};
  background: ${theme.colour(Colour.BLUE, 'B02')};
  margin-bottom: ${theme.spacing('S10')};

  ${({ $calendarPost }) =>
    $calendarPost
      ? css`
          &:first-child {
            background: ${theme.colour(Colour.BLUE, 'B04')};
          }
        `
      : css`
          &:first-child {
            padding: 0 0 ${theme.spacing('S24')} 0;
            background: ${theme.colour(Colour.NEUTRAL, 'N0')};
          }
        `}

  ${onMobileView} {
    padding: ${theme.spacing('S10')};
  }
`;

const UserInfo = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing('S10')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS8')};
  }
`;

const Content = styled.div`
  padding-top: ${theme.spacing('S20')};

  & > ol {
    list-style: decimal;
    padding-left: ${theme.spacing('S24')};
    margin-bottom: ${theme.spacing('S10')};
  }

  & > ul {
    list-style: disc;
    padding-left: ${theme.spacing('S24')};
    margin-bottom: ${theme.spacing('S10')};
  }

  & > p {
    margin-bottom: ${theme.spacing('S10')};
  }

  & img {
    max-width: 100%;
    height: auto;
  }

  & .emoji {
    height: 20px;
    width: 20px;
    vertical-align: middle;
  }

  & span.hidden,
  & div.plugin-calendar-event-responses-lists,
  & div.plugin-calendar-event-date,
  & div.plugin-calendar-event-repeats,
  & div.plugin-calendar-event-mandatory,
  & div.plugin-calendar-event-reminders {
    display: none;
  }

  & div.plugin-calendar-event-name {
    font-size: ${theme.fontSize('FS16')};
  }

  & a {
    text-decoration: underline;
  }

  & pre {
    background: #f3f3f3;
    max-height: 350px;
    display: block;
    overflow: auto;
    padding: ${theme.spacing('S8')};
    font-size: ${theme.fontSize('FS8')};
  }
`;

export default {
  Post,
  UserInfo,
  Content
};
