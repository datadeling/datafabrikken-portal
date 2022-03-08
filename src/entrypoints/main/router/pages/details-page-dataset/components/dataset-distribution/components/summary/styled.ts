import styled from 'styled-components';
import { theme, Colour } from '../../../../../../../app/theme';
import DataserviceIconBase from '../../../../../../../../../images/dataservice-icon.inline.svg';
import DownloadIconBase from '../../../../../../../../../images/icon-download.inline.svg';

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
`;

const Title = styled.h3`
  font-size: ${theme.fontSize('FS14')};
  flex: 1;
  margin: 0;
  line-height: 1.5;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Formats = styled.div`
  display: flex;
  margin-left: 12px;
`;

const DataserviceIcon = styled(DataserviceIconBase)`
  width: 20px;
  height: 20px;
  margin-right: ${theme.spacing('S2')};
  & path {
    stroke: ${theme.colour(Colour.BLUE, 'B38')};
  }
`;

const DownloadIcon = styled(DownloadIconBase)`
  margin-right: ${theme.spacing('S6')};
  align-self: center;
  width: 25px;
  height: 25px;
  & path {
    stroke: ${theme.colour(Colour.BLUE, 'B44')};
  }
`;

export default {
  Summary,
  Title,
  Formats,
  DataserviceIcon,
  DownloadIcon
};
