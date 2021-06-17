import { combineReducers } from 'redux';

import CmsPageReducer from '../../../components/with-cms-page/redux/reducer';
import CmsNewsReducer from '../../../components/with-cms-news/redux/reducer';
import DatasetsReducer from '../../../components/with-datasets/redux/reducer';

export default combineReducers({
  CmsPageReducer,
  CmsNewsReducer,
  DatasetsReducer
});
