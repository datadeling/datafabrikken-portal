import React, { memo, FC, useEffect } from 'react';
import { compose } from 'redux';
import { Link as RouterLink, RouteComponentProps } from 'react-router-dom';
import { InView } from 'react-intersection-observer';

import Root from '../../../../../components/root';
import Container from '../../../../../components/container';
import ParallaxContainer from '../../../../../components/parallax-container';
import {
  ContentBox,
  ContentBoxHeader,
  ContextBoxBody,
  SC as ContentBoxSC
} from '../../../../../components/content-box';
import Link, { Variant } from '../../../../../components/link';
import {
  InfoBox,
  InfoBoxBody,
  InfoBoxTitle,
  InfoBoxImage,
  SC as InfoBoxSC
} from '../../../../../components/info-box';
import withNews, {
  Props as CmsNewsProps
} from '../../../../../components/with-cms-news';
import withPage, {
  Props as CmsPageProps
} from '../../../../../components/with-cms-page';

import { PATHNAME } from '../../../../../enums';
import { dateStringToDate, formatDate } from '../../../../../utils/date';

import SC from './styled';
import Markdown from '../../../../../components/markdown';

const articleId = 'a8ba0c51-4693-401c-b2c8-61dfe144cc83';

interface Props extends RouteComponentProps, CmsNewsProps, CmsPageProps {}

const MainPage: FC<Props> = ({
  cmsNews,
  cmsNewsActions: { getNewsRequested: getNews },
  cmsPage,
  cmsPageActions: { getCmsPageRequested: getCmsPage, resetCmsPage }
}) => {
  useEffect(() => {
    getNews({ pageLimit: 2 });
    getCmsPage(articleId);
    return () => {
      resetCmsPage();
    };
  }, []);
  const modules = cmsPage?.field_modules ?? [];
  const firstElement = modules?.shift();
  return (
    <ParallaxContainer>
      <Root>
        <Container>
          <SC.Banner>
            <SC.Row animate>
              <ContentBox>
                <ContentBoxHeader>
                  <ContentBoxSC.ContentBoxHeader.Title>
                    {firstElement?.field_title}
                  </ContentBoxSC.ContentBoxHeader.Title>
                </ContentBoxHeader>
                <ContextBoxBody>
                  <Markdown allowHtml>
                    {firstElement?.field_body?.processed}
                  </Markdown>
                  {firstElement?.field_link && (
                    <Link
                      variant={Variant.PRIMARY}
                      as={RouterLink}
                      to={firstElement?.field_link?.uri.replace(
                        'internal:',
                        ''
                      )}
                    >
                      {firstElement?.field_link?.title}
                    </Link>
                  )}
                </ContextBoxBody>
              </ContentBox>
            </SC.Row>
          </SC.Banner>
          <SC.MainContent>
            {modules.map((module: any) => (
              <InView key={module.id} triggerOnce threshold={0.1}>
                {({ inView, ref }) => (
                  <SC.Row ref={ref} animate={inView}>
                    <ContentBox>
                      <ContentBoxHeader>
                        <ContentBoxSC.ContentBoxHeader.Title>
                          {module?.field_title}
                        </ContentBoxSC.ContentBoxHeader.Title>
                      </ContentBoxHeader>
                      <ContextBoxBody>
                        <Markdown allowHtml>
                          {module?.field_body?.processed}
                        </Markdown>
                        {module?.field_link && (
                          <Link
                            as={RouterLink}
                            to={module?.field_link?.uri.replace(
                              'internal:',
                              ''
                            )}
                          >
                            {module?.field_link?.title}
                          </Link>
                        )}
                      </ContextBoxBody>
                    </ContentBox>
                  </SC.Row>
                )}
              </InView>
            ))}
            <InView triggerOnce threshold={0.1}>
              {({ inView, ref }) => (
                <SC.NewsRow ref={ref} animate={inView}>
                  {cmsNews?.map(
                    ({
                      id,
                      created,
                      title,
                      field_ingress: ingress,
                      field_image_some: image_some
                    }) => (
                      <InfoBox
                        key={id}
                        as={RouterLink}
                        to={`${PATHNAME.NEWS}/${id}`}
                      >
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
                </SC.NewsRow>
              )}
            </InView>
          </SC.MainContent>
        </Container>
      </Root>
    </ParallaxContainer>
  );
};

export default compose<FC>(memo, withNews, withPage)(MainPage);
