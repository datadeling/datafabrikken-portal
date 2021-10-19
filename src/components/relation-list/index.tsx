import React, { memo, FC } from 'react';
import { compose } from 'redux';
import { PATHNAME } from '../../enums';
import env from '../../env';
import translations from '../../services/translations';
import {
  DataService,
  Dataset,
  DatasetReference,
  ItemWithRelationType
} from '../../types';
import KeyValueList from '../key-value-list';
import KeyValueListItem from '../key-value-list-item';
import ExternalLink from '../link-external';

import InternalLink from '../link-internal';

const renderReferenceString = (
  parentIdentifier: string,
  references: DatasetReference[]
) => {
  if (parentIdentifier) {
    const referenceTypes: string[] = references.reduce(
      (previous, { source = {}, referenceType = {} }) =>
        source?.uri === parentIdentifier && referenceType?.prefLabel
          ? [
              ...previous,
              translations.getTranslateText(referenceType.prefLabel) ?? ''
            ]
          : previous,
      [] as string[]
    );
    return referenceTypes.length > 0
      ? `  (${translations.translate(
          'detailsPage.relationList.referenceType'
        )}: ${referenceTypes.join(', ')})`
      : '';
  }
  return null;
};

interface RelationProps {
  parentIdentifier?: string;
  datasets?: Dataset[];
  dataServices?: DataService[];
  publicServices?: ItemWithRelationType[];
}

interface Props extends RelationProps {}

const RelationsList: FC<Props> = ({
  parentIdentifier,
  datasets,
  dataServices,
  publicServices
}) => (
  <KeyValueList key='dataset-relations' $highlighted>
    {datasets && datasets.length > 0 ? (
      <KeyValueListItem
        $valuesAsList
        property={translations.translate(
          'detailsPage.relationList.subtitle.dataset'
        )}
        value={datasets.map(({ uri, title, id, references }) =>
          uri && id && title ? (
            <span>
              <InternalLink
                to={`${PATHNAME.FIND_DATA}${PATHNAME.DATASETS}${PATHNAME.DATASET_DETAILS}/${id}`}
              >
                {translations.getTranslateText(title) ?? uri}
              </InternalLink>
              {references &&
                parentIdentifier &&
                renderReferenceString(parentIdentifier, references)}
            </span>
          ) : null
        )}
      />
    ) : null}
    {dataServices && dataServices.length > 0 ? (
      <KeyValueListItem
        $valuesAsList
        property={translations.translate(
          'detailsPage.relationList.subtitle.dataservice'
        )}
        value={dataServices.map(({ uri, title, id }) =>
          uri && id && title ? (
            <ExternalLink
              href={`${env.FDK_PORTAL_HOST}${PATHNAME.FDK_DATA_SERVICES}/${id}`}
            >
              {translations.getTranslateText(title) ?? uri}
            </ExternalLink>
          ) : null
        )}
      />
    ) : null}
    {publicServices && publicServices.length > 0 ? (
      <KeyValueListItem
        $valuesAsList
        property={translations.translate(
          'detailsPage.relationList.subtitle.public_service'
        )}
        value={publicServices.map(
          ({
            relation: { id, title, uri },
            relationType
          }: ItemWithRelationType) =>
            uri && id && title ? (
              <span>
                <ExternalLink
                  href={`${env.FDK_PORTAL_HOST}${PATHNAME.FDK_PUBLIC_SERVICES}/${id}`}
                >
                  {translations.getTranslateText(title) ?? uri}
                </ExternalLink>
                ({relationType})
              </span>
            ) : null
        )}
      />
    ) : null}
  </KeyValueList>
);

export default compose<FC<RelationProps>>(memo)(RelationsList);
