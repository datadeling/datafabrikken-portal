import React, { FC, memo, useEffect } from 'react';
import { compose } from 'redux';
import { Link as RouterLink } from 'react-router-dom';

import { dateStringToDate, formatDate } from '../../../../../utils/date';
import Root from '../../../../../components/root';
import Container from '../../../../../components/container';

import Translation from '../../../../../components/translation';

import withNews, {
  Props as CmsNewsProps
} from '../../../../../components/with-cms-news';

import {
  InfoBox,
  InfoBoxImage,
  InfoBoxBody,
  InfoBoxTitle,
  SC as InfoBoxSC
} from '../../../../../components/info-box';
import { PATHNAME } from '../../../../../enums';

import { PAGE_PROPERTY } from './enums';
import SC from './styled';

interface Props extends CmsNewsProps {}

const NewsPage: FC<Props> = ({
  cmsNews,
  cmsNewsActions: { getNewsRequested: getNews }
}) => {
  useEffect(() => {
    getNews({ pageLimit: PAGE_PROPERTY.NEWS_LIMIT });
  }, []);

  return (
    <Root>
      <Container>
        <SC.Page>
          <SC.Title>
            <Translation id='news.title' />
          </SC.Title>
          <SC.Content>
            {cmsNews?.map(
              ({
                id,
                created,
                title,
                field_ingress: ingress,
                field_image_some: image_some
              }) => (
                <InfoBox key={id} as={RouterLink} to={`${PATHNAME.NEWS}/${id}`}>
                  {image_some && (
                    <InfoBoxImage
                      src={image_some.thumbnail.download_urls.canonical}
                      alt={image_some.thumbnail.meta.alt}
                    />
                  )}
                  <InfoBoxSC.InfoBox.Date>
                    {created && formatDate(dateStringToDate(created))}
                  </InfoBoxSC.InfoBox.Date>
                  <InfoBoxTitle>
                    <h2>{title}</h2>
                  </InfoBoxTitle>
                  <InfoBoxBody>{ingress}</InfoBoxBody>
                </InfoBox>
              )
            )}
          </SC.Content>
        </SC.Page>
      </Container>
    </Root>
  );
};

export default compose<FC>(memo, withNews)(NewsPage);
