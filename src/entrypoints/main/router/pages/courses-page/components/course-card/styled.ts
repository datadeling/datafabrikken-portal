import styled from 'styled-components';
import { Colour, theme } from '../../../../../app/theme';

import WigglyLineBase from '../../../../../../../images/course-wiggly-line.inline.svg';

const Card = styled.div`
  display: flex;
  flex: 1 1 30%;
  flex-direction: column;
  margin: ${theme.spacing('S8')};
  box-shadow: 2.9px 2.9px 3.6px rgba(0, 0, 0, 0.049),
    8.1px 7.9px 10px rgba(0, 0, 0, 0.07),
    19.6px 19px 24.1px rgba(0, 0, 0, 0.091), 65px 63px 80px rgba(0, 0, 0, 0.14);
`;

const Image = styled.img`
  max-width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProviderLogo = styled.img`
  height: 35px;
  width: 210px;
  margin: ${theme.spacing('S4')} 0;
`;

const CourseContent = styled.div<{ $inverted: boolean }>`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  padding: ${theme.spacing('S16')};
  background-color: ${({ $inverted }) =>
    $inverted
      ? theme.colour(Colour.NEUTRAL, 'N0')
      : theme.colour(Colour.BLUE, 'B44')};
  color: ${({ $inverted }) =>
    $inverted
      ? theme.colour(Colour.BLUE, 'B52')
      : theme.colour(Colour.NEUTRAL, 'N0')};

  & > h3 {
    color: ${theme.colour(Colour.BLUE, 'B14')};
    font-size: ${theme.fontSize('FS14')};
    margin: ${theme.spacing('S8')} 0;
  }
`;

const CourseFacts = styled.div`
  display: flex;
  justify-content: space-around;
  margin: ${theme.spacing('S8')} 0;
`;

const CourseProvider = styled.div<{ $inverted: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing('S16')};
  background-color: ${({ $inverted }) =>
    $inverted
      ? theme.colour(Colour.BLUE, 'B44')
      : theme.colour(Colour.NEUTRAL, 'N0')};
  color: ${({ $inverted }) =>
    $inverted
      ? theme.colour(Colour.NEUTRAL, 'N0')
      : theme.colour(Colour.BLUE, 'B52')};
`;

const WigglyLine = styled(WigglyLineBase)<{ $inverted: boolean }>`
  margin-bottom: -1px;
  stroke: ${({ $inverted }) =>
    $inverted
      ? theme.colour(Colour.BLUE, 'B44')
      : theme.colour(Colour.NEUTRAL, 'N0')};
  fill: ${({ $inverted }) =>
    $inverted
      ? theme.colour(Colour.BLUE, 'B44')
      : theme.colour(Colour.NEUTRAL, 'N0')};
  background-color: ${({ $inverted }) =>
    $inverted
      ? theme.colour(Colour.NEUTRAL, 'N0')
      : theme.colour(Colour.BLUE, 'B44')};
`;

export default {
  Card,
  CourseContent,
  WigglyLine,
  CourseProvider,
  CourseFacts,
  Image,
  ProviderLogo
};
