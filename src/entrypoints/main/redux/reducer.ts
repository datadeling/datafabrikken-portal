import { combineReducers } from 'redux';

import CmsPageReducer from '../../../components/with-cms-page/redux/reducer';
import CmsNewsReducer from '../../../components/with-cms-news/redux/reducer';
import CommunityCategoriesReducer from '../../../components/with-community-categories/redux/reducer';
import CommunityCategoryReducer from '../../../components/with-community-category/redux/reducer';
import CommunityTagsReducer from '../../../components/with-community-tags/redux/reducer';
import CommunityTopicReducer from '../../../components/with-community-topic/redux/reducer';
import CommunitySearchReducer from '../../../components/with-community-search/redux/reducer';
import CommunityTopicsReducer from '../../../components/with-community-topics/redux/reducer';
import DatasetsReducer from '../../../components/with-datasets/redux/reducer';
import ReferenceDataReducer from '../../../components/with-reference-data/redux/reducer';
import DatasetReducer from '../../../components/with-dataset/redux/reducer';
import PublicServicesReducer from '../../../components/with-public-services/redux/reducer';
import DataServicesReducer from '../../../components/with-data-services/redux/reducer';
import AssessmentReducer from '../../../components/with-assessment/redux/reducer';
import OrganizationReducer from '../../../components/with-organization/redux/reducer';
import OrganizationsCatalogReducer from '../../../components/with-organizations-catalog/redux/reducer';
import ReportReducer from '../../../components/with-report/redux/reducer';
import OrganizationsReducer from '../../../components/with-organizations/redux/reducer';
import AssessmentsReducer from '../../../components/with-assessments/redux/reducer';
import DatasetPreviewReducer from '../../../components/with-dataset-preview/redux/reducer';
import SuggestionsReducer from '../../../components/with-suggestions/redux/reducer';
import ConceptsReducer from '../../../components/with-concepts/redux/reducer';
import { commentsApi } from '../../../services/api/user-feedback-api/comments';
import { communitySearchApi } from '../../../services/api/community-api/community-search';

export default combineReducers({
  CmsPageReducer,
  CmsNewsReducer,
  CommunityCategoriesReducer,
  CommunityCategoryReducer,
  CommunityTagsReducer,
  CommunityTopicReducer,
  CommunitySearchReducer,
  CommunityTopicsReducer,
  DatasetsReducer,
  ReferenceDataReducer,
  DatasetReducer,
  PublicServicesReducer,
  DataServicesReducer,
  AssessmentReducer,
  OrganizationReducer,
  OrganizationsCatalogReducer,
  ReportReducer,
  OrganizationsReducer,
  AssessmentsReducer,
  DatasetPreviewReducer,
  ConceptsReducer,
  SuggestionsReducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
  [communitySearchApi.reducerPath]: communitySearchApi.reducer
});
