import React, { memo, FC, useEffect } from 'react';

import { compose } from 'redux';

import DataGrid from 'react-data-grid';

import xmlFormat from 'xml-formatter';

import withDatasetPreview, {
  Props as DatasetPreviewProps
} from '../../../../../../../../../components/with-dataset-preview';

import Translation from '../../../../../../../../../components/translation';

import SpinnerIcon from '../../../../../../../../../components/icons/spinner-icon';

import SC from './styled';

interface ExternalProps {
  downloadURL: string;
  rowCount: number;
  isOpen: boolean;
  onClose: () => void;
}

interface Props extends ExternalProps, DatasetPreviewProps {}

const isXML = (contentType: string) => contentType.includes('xml');
const isJSON = (contentType: string) => contentType.includes('json');

const Preview: FC<Props> = ({
  downloadURL,
  rowCount,
  isOpen,
  onClose,
  datasetPreview,
  isLoadingDatasetPreview,
  datasetPreviewActions: { getDatasetPreviewRequested: getDatasetPreview }
}) => {
  const getColumns = (): any => {
    const {
      table: { header }
    } = datasetPreview;

    return header?.columns.map((column: string, index) => ({
      key: `column-${index}`,
      name: column,
      resizable: true,
      sortable: true
    }));
  };

  const getRows = (): any => {
    const {
      table: { rows }
    } = datasetPreview;

    return rows?.map(row =>
      row.columns.reduce(
        (result, column, index) => ({
          ...result,
          [`column-${index}`]: column
        }),
        {}
      )
    );
  };

  const beautifyJSON = (jsonString: string) => {
    const jsonObject = JSON.parse(jsonString);
    return JSON.stringify(jsonObject, null, 2);
  };

  const updateScrolling = () => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  };

  const handleOnClose = () => {
    isOpen = false;
    updateScrolling();
    onClose();
  };

  useEffect(() => {
    updateScrolling();
  }, [isOpen]);

  useEffect(() => {
    getDatasetPreview(downloadURL, rowCount);
  }, []);

  return (
    <SC.Modal show={isOpen}>
      <SC.Container>
        <SC.Header>
          <SC.CloseButton onClick={() => handleOnClose()}>
            <SC.ClearIcon /> Lukk
          </SC.CloseButton>
        </SC.Header>
        {isLoadingDatasetPreview && (
          <SC.Center>
            <SpinnerIcon />
          </SC.Center>
        )}
        {datasetPreview?.table && !isLoadingDatasetPreview && (
          <DataGrid columns={getColumns()} rows={getRows()} />
        )}
        {datasetPreview?.plain &&
          !datasetPreview?.table &&
          !isLoadingDatasetPreview &&
          isXML(datasetPreview.plain.contentType) && (
            <SC.Plain> {xmlFormat(datasetPreview.plain.value)}</SC.Plain>
          )}
        {datasetPreview?.plain &&
          !datasetPreview?.table &&
          !isLoadingDatasetPreview &&
          isJSON(datasetPreview.plain.contentType) && (
            <SC.Plain>{beautifyJSON(datasetPreview.plain.value)} </SC.Plain>
          )}
        {!(datasetPreview || isLoadingDatasetPreview) && (
          <SC.Center>
            <span>
              <Translation id='dataset.distribution.previewFailure' />
            </span>
          </SC.Center>
        )}
      </SC.Container>
    </SC.Modal>
  );
};

export default compose<FC<ExternalProps>>(memo, withDatasetPreview)(Preview);
