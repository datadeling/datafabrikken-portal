import React, { memo, FC, useEffect } from 'react';
import { compose } from 'redux';
import {
  Link as RouterLink,
  RouteComponentProps,
  useHistory
} from 'react-router-dom';

import lottie from 'lottie-web';

import Root from '../../../../../components/root';
import {
  ContentBox,
  ContentBoxHeader,
  ContextBoxBody,
  SC as ContentBoxSC
} from '../../../../../components/content-box';
import Link from '../../../../../components/link';
import {
  InfoBox,
  InfoBoxBody,
  InfoBoxTitle,
  InfoBoxImage,
  SC as InfoBoxSC,
  InfoBoxIcon
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
import AutosuggestSearchbar from '../../../../../components/autosuggest-searchbar';
import Translation from '../../../../../components/translation';
import withDatasets, {
  Props as DatasetsProps
} from '../../../../../components/with-datasets';
import withCommunityTopics, {
  Props as CommunityTopicsProps
} from '../../../../../components/with-community-topics';
import {
  withTranslations,
  Props as TranslationProps
} from '../../../../../providers/translations';
import Topic from '../../../../../components/community/topic';

import CommunityIllustration from '../../../../../images/illustration-community-large.inline.svg';
import CourseIllustration from '../../../../../images/illustration-course.inline.svg';
import GuideIllustration from '../../../../../images/illustration-guide.inline.svg';
import BoxOfDataIllustration from '../../../../../images/illustration-box-of-data.inline.svg';

import ArrowDownIcon from '../../../../../images/icon-arrow-down.inline.svg';

import factoryLottieJson from '../../../../../images/factory.lottie.json';

const articleId = 'bb81d27f-acf1-4fc6-9bc3-f289bf79207f';
interface Props
  extends RouteComponentProps,
    CmsNewsProps,
    CmsPageProps,
    DatasetsProps,
    CommunityTopicsProps,
    TranslationProps {}

const isAbsoluteUrl = (url: string) => {
  const r = new RegExp('^(?:[a-z]+:)?//', 'i');
  return r.test(url) ?? false;
};

const MainPage: FC<Props> = ({
  cmsNews,
  cmsNewsActions: { getNewsRequested: getNews },
  cmsPage,
  cmsPageActions: { getCmsPageRequested: getCmsPage, resetCmsPage },
  totalDatasets,
  datasetsActions: {
    getPagedDatasetsRequested: getPagedDatasets,
    resetPagedDatasets
  },
  communityTopics,
  communityTopicsActions: { getPopularTopicsRequested: getPopularTopics },
  translationsService
}) => {
  const history = useHistory();

  const searchSubmit = (searchString?: string) => {
    history.push({
      pathname: PATHNAME.FIND_DATA,
      search: `?q=${searchString || null}`
    });
  };

  let animationRef: any = null;

  const initAnimation = () => {
    lottie.loadAnimation({
      container: animationRef,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: factoryLottieJson
    });
  };

  useEffect(() => {
    initAnimation();
    getNews({ pageLimit: 3 });
    getCmsPage(articleId);
    getPagedDatasets();
    getPopularTopics();
    return () => {
      resetCmsPage();
      resetPagedDatasets();
    };
  }, []);
  const modules = cmsPage?.field_modules ?? [];
  const firstElement = modules?.shift();
  const secondElement = modules?.shift();
  return (
    <Root>
      <SC.Container>
        <SC.BannerSection>
          <SC.Row>
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
                <AutosuggestSearchbar
                  maxSuggestions={6}
                  placeholder={`${translationsService.translate(
                    'main.findData',
                    {
                      totalDatasets
                    }
                  )}`}
                  onClear={() => {}}
                  onSubmit={searchSubmit}
                />
              </ContextBoxBody>
            </ContentBox>
            <div
              ref={ref => {
                animationRef = ref;
              }}
            />
          </SC.Row>
          <SC.ArrowDown>
            <ArrowDownIcon />
          </SC.ArrowDown>
        </SC.BannerSection>
        <SC.MainContentSection>
          <SC.MainContent>
            <SC.Row>
              <SC.Topics>
                <SC.IllustrationBox>
                  <CommunityIllustration />
                  <SC.IllustrationContent>
                    <ContentBox>
                      <ContentBoxHeader>
                        <ContentBoxSC.ContentBoxHeader.Title>
                          {secondElement?.field_title}
                        </ContentBoxSC.ContentBoxHeader.Title>
                      </ContentBoxHeader>
                      <ContextBoxBody>
                        <Markdown allowHtml>
                          {secondElement?.field_body?.processed}
                        </Markdown>
                      </ContextBoxBody>
                    </ContentBox>
                  </SC.IllustrationContent>
                </SC.IllustrationBox>

                {communityTopics
                  .filter(topic => !topic.deleted)
                  .slice(0, 3)
                  .map((topic, index) => (
                    <Topic
                      key={`topic-${index}`}
                      topic={topic}
                      hideUserInfoAndTags
                    />
                  ))}
                <SC.LinkWrapper>
                  <Link as={RouterLink} to={PATHNAME.COMMUNITY}>
                    <Translation id='main.seeAllPostsCommunity' />
                  </Link>
                </SC.LinkWrapper>
              </SC.Topics>
            </SC.Row>
            <SC.Row>
              {modules.slice(0, 2).map((module: any, index: number) => (
                <InfoBox
                  key={module.id}
                  {...(isAbsoluteUrl(
                    module?.field_link?.uri?.replace('internal:', '')
                  )
                    ? { href: module.field_link?.uri, target: '_blank' }
                    : {
                        as: RouterLink,
                        to: module?.field_link?.uri?.replace('internal:', '')
                      })}
                >
                  <InfoBoxIcon>
                    {index === 0 ? (
                      <CourseIllustration />
                    ) : (
                      <GuideIllustration />
                    )}
                  </InfoBoxIcon>
                  <InfoBoxTitle>
                    <h2>{module.field_link?.title}</h2>
                  </InfoBoxTitle>
                  <InfoBoxBody>
                    <Markdown allowHtml>
                      {module.field_body?.processed}
                    </Markdown>
                  </InfoBoxBody>
                </InfoBox>
              ))}
            </SC.Row>
            {modules.slice(2, 3).map((module: any) => (
              <SC.Row>
                <SC.Teaser>
                  <SC.IllustrationBox>
                    <BoxOfDataIllustration />
                    <SC.IllustrationContent>
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
                        </ContextBoxBody>
                      </ContentBox>
                    </SC.IllustrationContent>
                  </SC.IllustrationBox>
                </SC.Teaser>
              </SC.Row>
            ))}
            <SC.NewsRow>
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
          </SC.MainContent>
        </SC.MainContentSection>
      </SC.Container>
    </Root>
  );
};

export default compose<FC>(
  memo,
  withNews,
  withPage,
  withDatasets,
  withCommunityTopics,
  withTranslations
)(MainPage);
