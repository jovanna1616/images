import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchImageSuccess } from './actions';
import request from 'utils/request';

import { FETCH_IMAGE_REQUEST } from './constants';

export function* fetchImageRequest (data) {
  try {
    const imageUrl = yield call(request, {
      url: `https://imagesearch.dev.tophat.com/?query=${data.payload}`,
      method: 'get'
    });
    yield put(fetchImageSuccess(imageUrl));
  } catch (error) {
    //
  }
}

export default function* dashboardSaga () {
  yield takeLatest(FETCH_IMAGE_REQUEST, fetchImageRequest)
}
