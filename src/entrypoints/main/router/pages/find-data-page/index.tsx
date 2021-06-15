import React, { FC, memo } from 'react';
import { compose } from 'redux';
import { Link as RouterLink } from 'react-router-dom';

import Root from '../../../../../components/root';
import Container from '../../../../../components/container';

import Translation from '../../../../../components/translation';

import SC from './styled';
import {
  InfoBox,
  InfoBoxBody,
  InfoBoxTitle
} from '../../../../../components/info-box';
import { PATHNAME } from '../../../../../enums';

interface Props {}

const FindDataPage: FC<Props> = () => (
  <Root>
    <Container>
      <SC.Page>
        <SC.Title>
          <Translation id='findDataPage.title' />
        </SC.Title>
        <SC.Content>
          <InfoBox
            as={RouterLink}
            to={`${PATHNAME.COMPETENCE_AND_GUIDANCE}${PATHNAME.DATASETS}`}
          >
            <InfoBoxTitle>
              <h2>
                <Translation id='findDataPage.findData' />
              </h2>
            </InfoBoxTitle>
            <InfoBoxBody>
              <Translation id='findDataPage.findDataText' />
            </InfoBoxBody>
          </InfoBox>
        </SC.Content>
      </SC.Page>
    </Container>
  </Root>
);

export default compose<FC>(memo)(FindDataPage);
