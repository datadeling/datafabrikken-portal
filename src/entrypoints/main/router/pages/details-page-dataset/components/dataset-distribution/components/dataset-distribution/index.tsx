import React, { memo, FC, useState } from 'react';
import { compose } from 'redux';
import {
  ExpansionPanelBody,
  ExpansionPanelHead
} from '@fellesdatakatalog/expansion-panel';

import ExternalLink from '../../../../../../../../../components/link-external';

import Summary from '../summary';
import Detail from '../detail';

import SC from './styled';

import {
  AccessService,
  Distribution,
  License,
  TextLanguage
} from '../../../../../../../../../types';
import translations from '../../../../../../../../../services/translations';
import DownloadIcon from '../../../../../../../../../components/icons/download-icon';
import PreviewIcon from '../../../../../../../../../components/icons/preview-icon';

import Preview from '../preview';

interface ExternalProps {
  datasetTitle: Partial<TextLanguage>;
  distribution: Partial<Distribution>;
  accessServices?: AccessService[];
  endpointDescriptions?: string[];
}

interface Props extends ExternalProps {}

const DatasetDistribution: FC<Props> = ({
  datasetTitle,
  distribution,
  accessServices = [],
  endpointDescriptions = []
}) => {
  const [showPreview, setShowPreview] = useState(false);

  const handleShowPreview = (show: boolean) => {
    setShowPreview(show);
  };

  const { title } = distribution;
  const { description } = distribution;
  const licenses = distribution.license ?? [];
  const formats = distribution.fdkFormat ?? [];
  const downloadURL = distribution?.downloadURL?.[0];
  const accessURL = distribution?.accessURL?.[0];

  const page = distribution?.page?.[0];
  const pageUri = page?.uri;

  const conformsTo = distribution?.conformsTo?.[0];
  const conformsToUri = conformsTo?.uri ?? null;
  const conformsToPrefLabel = conformsTo?.prefLabel ?? null;

  return (
    <SC.DatasetDistribution>
      <ExpansionPanelHead>
        <Summary
          title={
            translations.getTranslateText(title) ??
            translations.getTranslateText(description) ??
            accessURL?.toLowerCase() ??
            ''
          }
          formats={formats}
          hasDataservice={!!accessServices?.length}
          hasDownloadUrl={!!downloadURL}
        />
      </ExpansionPanelHead>
      <ExpansionPanelBody>
        {formats.length > 0 && (
          <Detail
            property='dataset.distribution.format'
            value={formats
              .map(format => format.name || format.code)
              .sort()
              .join(', ')}
          />
        )}
        {accessURL && (
          <Detail
            property='dataset.distribution.accessUrl'
            value={
              <ExternalLink href={accessURL} openInNewTab>
                {accessURL.toLowerCase()}
              </ExternalLink>
            }
          />
        )}
        {licenses?.map(
          ({ uri: licenseUri, prefLabel: licensePrefLabel }: License) => (
            <Detail
              key={licenseUri}
              property='dataset.distribution.licenseLinkDefault'
              value={
                <ExternalLink href={licenseUri} openInNewTab>
                  {translations.getTranslateText(licensePrefLabel) ||
                    licenseUri}
                </ExternalLink>
              }
            />
          )
        )}
        <Detail
          property='dataset.distribution.description'
          value={
            translations.getTranslateText(description) ||
            translations.translate('dataset.distribution.noDescription')
          }
        />
        {conformsToUri && (
          <Detail
            property='dataset.distribution.conformsTo'
            value={
              <ExternalLink href={conformsToUri} openInNewTab>
                {translations.getTranslateText(conformsToPrefLabel) ||
                  conformsToUri}
              </ExternalLink>
            }
          />
        )}
        {accessServices?.length > 0 && (
          <Detail
            property='dataset.distribution.dataService'
            value={
              <SC.ColumnData>
                {accessServices?.map(
                  ({
                    description: accessServiceDescription,
                    uri: accessServiceUri
                  }) => (
                    <SC.ColumnRow key={`CR-${accessServiceUri}`}>
                      <ExternalLink
                        href={accessServiceUri}
                        key={accessServiceUri}
                        openInNewTab
                      >
                        {translations.getTranslateText(
                          accessServiceDescription
                        )}
                      </ExternalLink>
                    </SC.ColumnRow>
                  )
                )}
              </SC.ColumnData>
            }
          />
        )}
        {endpointDescriptions?.length > 0 && (
          <Detail
            property='dataset.distribution.endpointDescription'
            value={
              <SC.ColumnData>
                {endpointDescriptions?.map(endpointDescription => (
                  <SC.ColumnRow key={`CR-${endpointDescription}`}>
                    <ExternalLink
                      href={endpointDescription}
                      key={endpointDescription}
                      openInNewTab
                    >
                      {endpointDescription}
                    </ExternalLink>
                  </SC.ColumnRow>
                ))}
              </SC.ColumnData>
            }
          />
        )}
        {pageUri && (
          <Detail
            property='dataset.distribution.moreInformation'
            value={
              <ExternalLink href={pageUri} openInNewTab>
                {translations.translate('dataset.distribution.page')}
              </ExternalLink>
            }
          />
        )}
        {downloadURL && (
          <SC.Section>
            <SC.DownloadLink href={downloadURL}>
              {translations.translate('dataset.distribution.download')}
              <DownloadIcon />
            </SC.DownloadLink>

            <SC.PreviewLink onClick={() => handleShowPreview(true)}>
              {translations.translate('dataset.distribution.preview')}
              <PreviewIcon />
            </SC.PreviewLink>
          </SC.Section>
        )}
        {downloadURL && showPreview && (
          <Preview
            title={translations.getTranslateText(datasetTitle) ?? ''}
            subtitle={
              translations.getTranslateText(title) ??
              translations.getTranslateText(description) ??
              accessURL?.toLowerCase() ??
              ''
            }
            downloadURL={downloadURL}
            rowCount={100}
            isOpen={showPreview}
            onClose={() => handleShowPreview(false)}
          />
        )}
      </ExpansionPanelBody>
    </SC.DatasetDistribution>
  );
};

export default compose<FC<ExternalProps>>(memo)(DatasetDistribution);
