import styled, { css } from 'styled-components';

import { theme, Colour } from '../../../../../app/theme';

const onMobileView = '@media (max-width: 900px)';

const Post = styled.div<{ $calendarPost: boolean }>`
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSize('FS10')};
  color: ${theme.colour(Colour.BLUE, 'B52')};
  padding: ${theme.spacing('S24')};
  background: ${theme.colour(Colour.NEUTRAL, 'N02')};
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
            padding-top: 0;
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

  & > p {
    margin-bottom: ${theme.spacing('S10')};
  }

  & img {
    max-width: 100%;
    height: auto;
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
    border-bottom: 3px solid ${theme.colour(Colour.BLUE, 'B14')};
  }
`;

export default {
  Post,
  UserInfo,
  Content
};
