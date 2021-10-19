import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  paramsToSearchBody,
  searchPublicServices,
  extractPublicServices
} from '../../../services/api/search-fulltext-api/public-services';
import { PublicService } from '../../../types';

import { GET_PUBLIC_SERVICES_RELATIONS_REQUESTED } from './action-types';
import * as actions from './actions';

function* getPublicServicesRelationsRequested({
  payload: {
    params: {
      page,
      sortfield,
      size,
      q,
      orgPath,
      isGroupedBy,
      keywords,
      publicServiceIdentifiers,
      requiredByServiceUri,
      relatedByServiceUri,
      isDescribedAt,
      isClassifiedBy,
      requiresOrRelates
    }
  }
}: ReturnType<typeof actions.getPublicServicesRelationsRequested>) {
  try {
    const data: Record<string, any> = yield call(
      searchPublicServices,
      paramsToSearchBody({
        page,
        sortfield,
        size,
        q,
        orgPath,
        isGroupedBy,
        keywords,
        publicServiceIdentifiers,
        requiredByServiceUri,
        relatedByServiceUri,
        isDescribedAt,
        isClassifiedBy,
        requiresOrRelates
      })
    );

    if (data) {
      yield put(
        actions.getPublicServicesRelationsSucceeded(
          extractPublicServices(data) as PublicService[]
        )
      );
    } else {
      yield put(actions.getPublicServicesRelationsFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getPublicServicesRelationsFailed(e.message));
  }
}

export default function* saga() {
  yield all([
    takeLatest(
      GET_PUBLIC_SERVICES_RELATIONS_REQUESTED,
      getPublicServicesRelationsRequested
    )
  ]);
}
