import React, { FC, memo } from 'react';

import { Link as RouterLink } from 'react-router-dom';

import parse from 'html-react-parser';

import { compose } from 'redux';

import TextCloudIcon from '../../../../../../../images/icon-text-cloud.inline.svg';
import LightBulbIcon from '../../../../../../../images/icon-lightbulb.inline.svg';
import CalendarIcon from '../../../../../../../images/icon-calendar.inline.svg';
import MegaphoneIcon from '../../../../../../../images/icon-megaphone.inline.svg';
import ThumbsIcon from '../../../../../../../images/icon-thumbs.inline.svg';

import InsightIcon from '../../../../../../../images/icon-community-insight.inline.svg';
import LawIcon from '../../../../../../../images/icon-law.inline.svg';

import { CommunityCategory } from '../../../../../../../types';

import { PATHNAME } from '../../../../../../../enums';

import Markdown from '../../../../../../../components/markdown';

import {
  InfoBox,
  InfoBoxBody,
  InfoBoxIcon,
  InfoBoxTitle
} from '../../../../../../../components/info-box';

interface Props {
  category: CommunityCategory;
}

const getCategoryIcon = (slug: string) => {
  const slugName = slug.split('/').pop();

  switch (slugName) {
    case 'gode-eksempler-på-bruk':
      return <LightBulbIcon />;
    case 'møter-og-arrangementer':
      return <CalendarIcon />;
    case 'tilbakemeldinger-og-nyheter':
      return <ThumbsIcon />;
    case 'etterspør-datasett-og-api-er':
      return <MegaphoneIcon />;
    case 'innsynsløsning-utredning-av-tekniske-og-juridiske-muligheter':
      return <InsightIcon />;
    case 'juss-og-data':
      return <LawIcon />;
    default:
      return <TextCloudIcon />;
  }
};

const Category: FC<Props> = ({ category: { slug, name, description } }) => (
  <InfoBox
    key={`category-${slug}`}
    as={RouterLink}
    to={`${PATHNAME.COMMUNITY}/${slug}`}
  >
    <InfoBoxIcon>{getCategoryIcon(slug)}</InfoBoxIcon>
    <InfoBoxTitle>
      <h2>{parse(name)}</h2>
    </InfoBoxTitle>
    <InfoBoxBody>
      <Markdown allowHtml>{description}</Markdown>
    </InfoBoxBody>
  </InfoBox>
);

export default compose<FC<Props>>(memo)(Category);
