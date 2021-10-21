import { combineReducers } from 'redux';

import CmsPageReducer from '../../../components/with-cms-page/redux/reducer';
import CmsNewsReducer from '../../../components/with-cms-news/redux/reducer';
import CommunityCategoriesReducer from '../../../components/with-community-categories/redux/reducer';
import CommunityCategoryReducer from '../../../components/with-community-category/redux/reducer';
import CommunityTagsReducer from '../../../components/with-community-tags/redux/reducer';
import CommunityTopicReducer from '../../../components/with-community-topic/redux/reducer';
import CommunitySearchReducer from '../../../components/with-community-search/redux/reducer';
import DatasetsReducer from '../../../components/with-datasets/redux/reducer';
import ReferenceDataReducer from '../../../components/with-reference-data/redux/reducer';
import DatasetReducer from '../../../components/with-dataset/redux/reducer';
import PublicServicesReducer from '../../../components/with-public-services/redux/reducer';
import DataServicesReducer from '../../../components/with-data-services/redux/reducer';
import AssessmentReducer from '../../../components/with-assessment/redux/reducer';

export default combineReducers({
  CmsPageReducer,
  CmsNewsReducer,
  CommunityCategoriesReducer,
  CommunityCategoryReducer,
  CommunityTagsReducer,
  CommunityTopicReducer,
  CommunitySearchReducer,
  DatasetsReducer,
  ReferenceDataReducer,
  DatasetReducer,
  PublicServicesReducer,
  DataServicesReducer,
  AssessmentReducer
});
