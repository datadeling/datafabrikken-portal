import React, {
  Children,
  FC,
  isValidElement,
  memo,
  PropsWithChildren,
  useEffect
} from 'react';
import { compose } from 'redux';

import withDataset, { Props as DatasetProps } from '../with-dataset';
import withReferenceData, {
  Props as ReferenceDataProps
} from '../with-reference-data';

import Translation from '../translation';
import Root from '../root';

import SC from './styled';
import SideMenu from './components/side-menu';

import { Entity } from '../../types/enums';
import Themes from './components/themes';
import { Publisher, TextLanguage, Theme } from '../../types';
import { getReferenceData } from '../../services/api/reference-data/reference-data';
import translations from '../../services/translations';
import ContentSection from './components/content-section';

interface ExternalProps {
  entity: Entity;
  title: Partial<TextLanguage>;
  publisher?: Partial<Publisher>;
  lastPublished: string;
  isAuthoritative: boolean;
  isOpenData: boolean;
  isPublicData: boolean;
  isRestrictedData: boolean;
  isNonPublicData: boolean;
  themes: Theme[];
}

interface Props extends DatasetProps, ReferenceDataProps, ExternalProps {}

const publisherLabel: Record<Entity, string> = {
  [Entity.DATASET]: 'owner'
};

const DetailsPage: FC<PropsWithChildren<Props>> = ({
  entity,
  title: pageTitle,
  publisher,
  lastPublished,
  isAuthoritative,
  isOpenData,
  isPublicData,
  isRestrictedData,
  isNonPublicData,
  themes,
  referenceData: { los: losThemes, themes: euThemes },
  children
}) => {
  const contentSections = Children.toArray(children);

  const validContentSections = contentSections
    .map(child =>
      isValidElement(child) && child.type === ContentSection ? child : null
    )
    ?.filter(Boolean);

  const menuItems = validContentSections.map((child: any) => ({
    id: child.props.id,
    title: translations.getTranslateText(child.props.title)
  }));

  useEffect(() => {
    if (!losThemes) {
      getReferenceData('los');
    }
    if (!euThemes) {
      getReferenceData('themes');
    }
  }, []);
  return (
    <Root>
      <SC.Banner>
        <SC.Title>
          <Translation text={pageTitle} />
          {isAuthoritative && <SC.AuthoritativeIcon />}
        </SC.Title>
        <SC.SubBanner>
          <p>
            <Translation id={publisherLabel[entity]} />
            {': '}
            <Translation text={publisher?.prefLabel} />
          </p>
        </SC.SubBanner>
      </SC.Banner>
      <SC.Content>
        <SC.Container>
          <SideMenu menuItems={menuItems} />
          <SC.ContentSections>
            <SC.DetailsIntro>
              <Translation
                id='detailsPage.intro.lastPublishedInfo'
                values={{
                  entity: translations.translate(
                    `detailsPage.intro.entity.${entity}`
                  ) as string,
                  lastPublished
                }}
              />
              <Themes
                entity={entity}
                isOpenData={isOpenData}
                isPublicData={isPublicData}
                isRestrictedData={isRestrictedData}
                isNonPublicData={isNonPublicData}
                themes={themes}
              />
            </SC.DetailsIntro>
            {validContentSections}
          </SC.ContentSections>
        </SC.Container>
      </SC.Content>
    </Root>
  );
};

export default compose<FC<ExternalProps>>(
  memo,
  withDataset,
  withReferenceData
)(DetailsPage);
