import { combineReducers } from 'redux';

import CmsPageReducer from '../../../components/with-cms-page/redux/reducer';
import CmsNewsReducer from '../../../components/with-cms-news/redux/reducer';
import CommunityCategoriesReducer from '../../../components/with-community-categories/redux/reducer';
import CommunityCategoryReducer from '../../../components/with-community-category/redux/reducer';
import CommunityTopicReducer from '../../../components/with-community-topic/redux/reducer';
import DatasetsReducer from '../../../components/with-datasets/redux/reducer';
import ReferenceDataReducer from '../../../components/with-reference-data/redux/reducer';

export default combineReducers({
  CmsPageReducer,
  CmsNewsReducer,
  CommunityCategoriesReducer,
  CommunityCategoryReducer,
  CommunityTopicReducer,
  DatasetsReducer,
  ReferenceDataReducer
});
