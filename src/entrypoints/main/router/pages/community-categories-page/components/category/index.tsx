import React, { FC, memo } from 'react';

import { Link as RouterLink } from 'react-router-dom';

import parse from 'html-react-parser';

import { compose } from 'redux';

import TextCloudIcon from '../../../../../../../images/icon-text-cloud.inline.svg';
import LightBulbIcon from '../../../../../../../images/icon-lightbulb.inline.svg';
import CalendarIcon from '../../../../../../../images/icon-calendar.inline.svg';
import DatasetApiIcon from '../../../../../../../images/icon-dataset-api.inline.svg';
import ThumbsIcon from '../../../../../../../images/icon-thumbs.inline.svg';
import ExamplesIcon from '../../../../../../../images/icon-examples.inline.svg';
import ProjectsIcon from '../../../../../../../images/icon-projects.inline.svg';
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

import SC from './styled';

interface Props {
  category: CommunityCategory;
}

const getCategoryIcon = (slug: string) => {
  const slugName = slug.split('/').pop();

  switch (slugName) {
    case 'gode-eksempler-på-bruk':
      return <ExamplesIcon />;
    case 'møter-og-arrangementer':
      return <CalendarIcon />;
    case 'tilbakemeldinger-og-nyheter':
      return <ThumbsIcon />;
    case 'etterspør-datasett-og-api-er':
      return <DatasetApiIcon />;
    case 'juss-og-data':
      return <LawIcon />;
    case 'arenaer-og-prosjekter':
      return <ProjectsIcon />;
    case 'tips-og-spørsmål':
      return <LightBulbIcon />;
    default:
      return <TextCloudIcon />;
  }
};

const Category: FC<Props> = ({
  category: { slug, name, description, children }
}) => (
  <InfoBox
    key={`category-${slug}`}
    as={RouterLink}
    to={`${PATHNAME.COMMUNITY}/${slug}`}
  >
    <InfoBoxIcon>{getCategoryIcon(slug)}</InfoBoxIcon>
    <InfoBoxTitle>
      <h4>{parse(name)}</h4>
    </InfoBoxTitle>
    <InfoBoxBody truncate={false}>
      {children?.length > 0 && (
        <SC.Subcategories>
          {children.map((subCategory, index) =>
            index > 0 ? <> &#8226; {subCategory.name}</> : subCategory.name
          )}
        </SC.Subcategories>
      )}
      <Markdown allowHtml>{description}</Markdown>
    </InfoBoxBody>
  </InfoBox>
);

export default compose<FC<Props>>(memo)(Category);
