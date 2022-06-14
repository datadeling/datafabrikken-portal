import React, { FC, memo, PropsWithChildren } from 'react';

import SC from './styled';
import TruncatedText from '../truncated-text';
import Translation from '../translation';
import RoundedTag, { Variant } from '../rounded-tag';
import {
  AccessRight as AccessRightEnum,
  MediaTypeOrExtentType
} from '../../types/enums';
import { PATHNAME } from '../../enums';
import type {
  AccessRight,
  Distribution,
  MediaTypeOrExtent,
  Publisher,
  TextLanguage
} from '../../types';

interface Props {
  id: string;
  publisher: Partial<Publisher>;
  title: TextLanguage;
  description: TextLanguage;
  distributions?: Distribution[];
  accessRight?: AccessRight;
}

function isDatasetOpen(
  accessRight: AccessRight | undefined | null,
  distributions: Distribution[]
): boolean {
  return (
    accessRight?.code === AccessRightEnum.PUBLIC &&
    distributions?.filter((item: any) => !!item.openLicense).length > 0
  );
}

const SearchHit: FC<PropsWithChildren<Props>> = ({
  id,
  publisher,
  title,
  description,
  distributions = [],
  accessRight
}) => {
  const formats =
    distributions?.reduce(
      (previous, { fdkFormat = [] }) => [...previous, ...(fdkFormat ?? [])],
      [] as MediaTypeOrExtent[]
    ) ?? [];

  const determineAccessRightLabel = () => {
    switch (accessRight?.code) {
      case AccessRightEnum.PUBLIC:
      case AccessRightEnum.RESTRICTED:
      case AccessRightEnum.NON_PUBLIC:
        return <Translation id='accessRights.limitedAccess' />;
      default:
        return <Translation id='unknown' />;
    }
  };
  return (
    <SC.SearchHit>
      <SC.Title>
        <a href={`${PATHNAME.FIND_DATA}${PATHNAME.DATASET_DETAILS}/${id}`}>
          <Translation text={title} />
        </a>
      </SC.Title>
      {publisher && (
        <SC.Publisher>
          <span>
            <Translation id='owner' />:
          </span>
          <span>
            {publisher.prefLabel ? (
              <Translation text={publisher.prefLabel} />
            ) : (
              publisher.name
            )}
          </span>
        </SC.Publisher>
      )}
      <SC.Description>
        <TruncatedText visibleLines={4} lineHeight={28}>
          <Translation text={description} />
        </TruncatedText>
      </SC.Description>
      <SC.Tags>
        {isDatasetOpen(accessRight, distributions) && (
          <RoundedTag as='div'>
            <span>
              <Translation id='openData' />
            </span>
          </RoundedTag>
        )}
        {accessRight && !isDatasetOpen(accessRight, distributions) && (
          <RoundedTag as='div'>
            <span>{determineAccessRightLabel()}</span>
          </RoundedTag>
        )}
        {[
          ...new Set(
            formats
              .filter(format => format.type !== MediaTypeOrExtentType.UNKNOWN)
              .map(format => format.name)
          )
        ]
          .sort()
          .map((format, index) => (
            <RoundedTag
              as='div'
              key={`format-${format}-${index}`}
              variant={Variant.SECONDARY}
            >
              <span>{format}</span>
            </RoundedTag>
          ))}
      </SC.Tags>
    </SC.SearchHit>
  );
};

export default memo(SearchHit);
