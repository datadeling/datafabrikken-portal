import React, { memo, FC } from 'react';
import { compose } from 'redux';

import Translation from '../../translation';
import withAssessment, {
  Props as AssessmentProps
} from '../../with-assessment';

interface Props extends AssessmentProps {}

const MetadataDatasetBreadcrumb: FC<Props> = ({ assessment }) =>
  assessment ? (
    <Translation text={assessment?.entity?.title} />
  ) : (
    <Translation id='errorPage.pageNotFound' />
  );

export default compose<FC>(memo, withAssessment)(MetadataDatasetBreadcrumb);
