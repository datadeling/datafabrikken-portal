import React, {
  Children,
  FC,
  isValidElement,
  memo,
  PropsWithChildren
} from 'react';
import { compose } from 'redux';

import withDataset, { Props as DatasetProps } from '../with-dataset';

import Translation from '../translation';
import Root from '../root';

import SC from './styled';
import SideMenu from './components/side-menu';

import { Entity } from '../../types/enums';
import Themes from './components/themes';
import { Publisher, TextLanguage, Theme } from '../../types';
import translations from '../../services/translations';
import ContentSection from './components/content-section';
import MetadataQuality from './components/metadata-quality';
import InternalLink from '../link-internal';
import { PATHNAME } from '../../enums';

interface ExternalProps {
  entity: Entity;
  entityId?: string;
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

interface Props extends DatasetProps, ExternalProps {}

const publisherLabel: Record<Entity, string> = {
  [Entity.DATASET]: 'owner'
};

const DetailsPage: FC<PropsWithChildren<Props>> = ({
  entity,
  entityId,
  title: pageTitle,
  publisher,
  lastPublished,
  isAuthoritative,
  isOpenData,
  isPublicData,
  isRestrictedData,
  isNonPublicData,
  themes,
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

  return (
    <Root>
      <SC.Banner>
        <SC.Title>
          <Translation text={pageTitle} />
          {isAuthoritative && <SC.AuthoritativeIcon />}
        </SC.Title>
        <SC.SubBanner>
          <SC.PublisherContainer>
            <Translation id={`${publisherLabel[entity]}`} />:
            <InternalLink
              to={`${PATHNAME.ORGANIZATION}/${publisher?.id}`}
              hideIcon
            >
              <Translation text={publisher?.prefLabel} />
            </InternalLink>
          </SC.PublisherContainer>
          <MetadataQuality entityId={entityId} orgId={publisher?.id} />
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

export default compose<FC<ExternalProps>>(memo, withDataset)(DetailsPage);
