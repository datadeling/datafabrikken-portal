import React, { memo, FC, useState } from 'react';
import { compose } from 'redux';

import SC from './styled';
import ErrorPage from '../../../../../components/error-page';
import withErrorBoundary from '../../../../../components/with-error-boundary';
import Root from '../../../../../components/root';
import GuideCard from '../../../../../components/info-card';
import Markdown from '../../../../../components/markdown';

import {
  ComponentBasicInfobox,
  Enum_Guide_Primarytargetgroup,
  useGetGuidanceQuery
} from '../../../../../services/api/generated/cms/graphql';
import { RadioOption } from '../../../../../components/radio-options';
import { isBasicInfoBox, isBasicParagraph } from '../../../../../utils/strapi';
import { InfoBoxStrapi } from '../../../../../components/info-box';

interface Props {}

const GuidancePage: FC<Props> = () => {
  const [selectedTargetGroup, setSelectedTargetGroup] =
    useState<Enum_Guide_Primarytargetgroup>();
  const { data: coursesData } = useGetGuidanceQuery();
  const { guides, topArticle } = coursesData ?? {};

  const [ingressParagraph, coursesParagraph] =
    topArticle?.content?.filter(content => isBasicParagraph(content)) ?? [];

  const infoBoxes =
    (topArticle?.content?.filter(content =>
      isBasicInfoBox(content)
    ) as ComponentBasicInfobox[]) ?? [];

  return (
    <Root>
      <SC.Header>
        <SC.Container>
          <SC.Title>{topArticle?.title}</SC.Title>
          <SC.Subtitle>
            {isBasicParagraph(ingressParagraph) && (
              <Markdown>{ingressParagraph.content ?? ''}</Markdown>
            )}
          </SC.Subtitle>
        </SC.Container>
      </SC.Header>
      <SC.GuideSection>
        <SC.Container>
          <SC.InfoBoxContainer>
            {infoBoxes.map(infoBox => (
              <InfoBoxStrapi infoBox={infoBox} />
            ))}
          </SC.InfoBoxContainer>
          {isBasicParagraph(coursesParagraph) && (
            <Markdown>{coursesParagraph.content ?? ''}</Markdown>
          )}
          <SC.RadioContainer>
            <RadioOption
              value={undefined}
              label='guidancePage.radio.all'
              group='PrimaryTargetGroup'
              id='radio0'
              checked={!selectedTargetGroup}
              onChange={() => setSelectedTargetGroup(undefined)}
            />
            <RadioOption
              value={Enum_Guide_Primarytargetgroup.DataProvider}
              label='guidancePage.radio.provider'
              group='PrimaryTargetGroup'
              id='radio1'
              checked={
                selectedTargetGroup ===
                Enum_Guide_Primarytargetgroup.DataProvider
              }
              onChange={() =>
                setSelectedTargetGroup(
                  Enum_Guide_Primarytargetgroup.DataProvider
                )
              }
            />
            <RadioOption
              value={Enum_Guide_Primarytargetgroup.DataConsumer}
              label='guidancePage.radio.consumer'
              group='PrimaryTargetGroup'
              id='radio2'
              checked={
                selectedTargetGroup ===
                Enum_Guide_Primarytargetgroup.DataConsumer
              }
              onChange={() =>
                setSelectedTargetGroup(
                  Enum_Guide_Primarytargetgroup.DataConsumer
                )
              }
            />
          </SC.RadioContainer>
          <SC.GuideCardContainer>
            {guides
              ?.filter(
                guide =>
                  !selectedTargetGroup ||
                  (guide != null &&
                    guide.primaryTargetGroup != null &&
                    guide.primaryTargetGroup === selectedTargetGroup)
              )
              ?.map(guide => (
                <GuideCard infoObject={guide} />
              ))}
          </SC.GuideCardContainer>
        </SC.Container>
      </SC.GuideSection>
    </Root>
  );
};

export default compose<FC>(memo, withErrorBoundary(ErrorPage))(GuidancePage);
