import React, { FC, memo, useEffect } from 'react';

import { compose } from 'redux';
import { Rating } from '../../../../types';
import { RatingCategory } from '../../../../types/enums';

import SC from './styled';
import Translation from '../../../translation';
import withAssessment, {
  Props as AssessmentProps
} from '../../../with-assessment';

interface ExternalProps {
  entityId?: string;
}

interface Props extends ExternalProps, AssessmentProps {}

export const determineRatingIcon = (r: Partial<Rating> | null | undefined) => {
  switch (r?.category) {
    case RatingCategory.EXCELLENT:
      return <SC.QualityIconExcellent />;
    case RatingCategory.GOOD:
      return <SC.QualityIconGood />;
    case RatingCategory.SUFFICIENT:
      return <SC.QualityIconOk />;
    case RatingCategory.POOR:
    default:
      return <SC.QualityIconPoor />;
  }
};

export const determineRatingTranslation = (
  r: Partial<Rating> | null | undefined
) => {
  switch (r?.category) {
    case RatingCategory.EXCELLENT:
      return (
        <Translation id='metadataQualityPage.metadataQualityIsExcellent' />
      );
    case RatingCategory.GOOD:
      return <Translation id='metadataQualityPage.metadataQualityIsGood' />;
    case RatingCategory.SUFFICIENT:
      return (
        <Translation id='metadataQualityPage.metadataQualityIsSufficient' />
      );
    case RatingCategory.POOR:
    default:
      return <Translation id='metadataQualityPage.metadataQualityIsPoor' />;
  }
};

export const calculateRatingPercentage = (
  r: Pick<Rating, 'score' | 'maxScore'> | null | undefined
) => {
  const score = r?.score ?? 0;
  const maxScore = r?.maxScore ?? 0;

  return maxScore === 0 ? 0 : Math.round((score / maxScore) * 100);
};

const MetadataQuality: FC<Props> = ({
  entityId,
  assessment,
  assessmentActions: { getAssessmentRequested: getAssessment }
}) => {
  useEffect(() => {
    if (entityId) {
      getAssessment(entityId);
    }
  }, [entityId]);
  return (
    assessment && (
      <SC.MetadataQuality>
        <p>
          <Translation id='metadataQualityPage.metadataQuality' />{' '}
          {calculateRatingPercentage(assessment.rating)}%
        </p>
        <SC.RatingIcon>{determineRatingIcon(assessment.rating)}</SC.RatingIcon>
      </SC.MetadataQuality>
    )
  );
};

export default compose<FC<ExternalProps>>(
  memo,
  withAssessment
)(MetadataQuality);
