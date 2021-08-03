import React, { FC, memo, PropsWithChildren } from 'react';

import env from '../../env';

import SC from './styled';
import TruncatedText from '../truncated-text';
import Translation from '../translation';
import RoundedTag, { Variant } from '../rounded-tag';
import { AccessRight as AccessRightEnum } from '../../types/enums';
import { formatSorter, toFormat, toMediaType } from '../../utils/mediatype';
import type {
  AccessRight,
  Distribution,
  MediaType,
  Publisher,
  TextLanguage
} from '../../types';

const { FDK_PORTAL_HOST } = env;

interface Props {
  id: string;
  publisher: Partial<Publisher>;
  title: TextLanguage;
  description: TextLanguage;
  distributions?: Distribution[];
  accessRight?: AccessRight;
  mediatypes?: MediaType[];
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
  publisher: { name, prefLabel },
  title,
  description,
  distributions = [],
  accessRight,
  mediatypes = []
}) => {
  const formats = distributions
    ?.reduce((previous, current) => {
      const format = current.format ?? [];
      return [...previous, ...format];
    }, [] as string[])
    .map(toFormat)
    .sort(formatSorter)
    .map(toMediaType(mediatypes));

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
        <a
          href={`${FDK_PORTAL_HOST}/datasets/${id}`}
          target='_blank'
          rel='noreferrer'
        >
          <Translation text={title} />
        </a>
      </SC.Title>
      <SC.Publisher>
        <span>
          <Translation id='owner' />:
        </span>
        <span>{prefLabel ? <Translation text={prefLabel} /> : name}</span>
      </SC.Publisher>
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
        {[...new Set(formats)].map((format, index) => (
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
