import React, { memo, FC } from 'react';

import SC from './styled';

import { MediaTypeOrExtent } from '../../../../../../../../../types';
import RoundedTag, {
  Variant
} from '../../../../../../../../../components/rounded-tag';

const getFormatText = (str: string) => {
  const containsFormat = (format: string) =>
    str?.toLowerCase().includes(format);

  if (containsFormat('csv')) {
    return 'CSV';
  }
  if (containsFormat('yaml')) {
    return 'YAML';
  }
  if (containsFormat('geo+json')) {
    return 'GeoJSON';
  }
  if (containsFormat('html')) {
    return 'HTML';
  }
  if (containsFormat('sosi')) {
    return 'SOSI';
  }
  if (containsFormat('openxmlformats-officedocument.spreadsheetml.sheet')) {
    return 'XLSX';
  }
  if (containsFormat('sealed-xls')) {
    return 'XLS';
  }
  if (containsFormat('rss')) {
    return 'RSS';
  }
  if (containsFormat('rdf+xml')) {
    return 'RDF/XML';
  }
  if (containsFormat('turtle')) {
    return 'RDF/Turtle';
  }
  if (containsFormat('json+ld')) {
    return 'JSON-LD';
  }
  if (containsFormat('txt')) {
    return 'txt';
  }
  if (containsFormat('siri')) {
    return 'SIRI';
  }
  if (containsFormat('xml')) {
    return 'XML';
  }
  if (containsFormat('json')) {
    return 'JSON';
  }

  return null;
};

interface Props {
  title: string;
  formats: MediaTypeOrExtent[];
  hasDataservice?: boolean;
  hasDownloadUrl?: boolean;
}

const Summary: FC<Props> = ({
  title,
  formats,
  hasDataservice,
  hasDownloadUrl,
  ...props
}) => (
  <SC.Summary {...props}>
    <SC.Title>{title}</SC.Title>
    <SC.Formats>
      {hasDownloadUrl && <SC.DownloadIcon />}
      {hasDataservice && (
        <RoundedTag as='div' variant={Variant.SECONDARY}>
          <SC.DataserviceIcon />
          API
        </RoundedTag>
      )}
      {formats.map((format, index) => {
        const formatLabel = getFormatText(format.code);
        return (
          formatLabel && (
            <RoundedTag
              as='div'
              variant={Variant.SECONDARY}
              key={`FormatTag-${formatLabel}-${index}`}
            >
              {formatLabel}
            </RoundedTag>
          )
        );
      })}
    </SC.Formats>
  </SC.Summary>
);

export default memo(Summary);
