import { DEFAULT_ACTION, FETCH_IMAGE_REQUEST, FETCH_IMAGE_REQUEST_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function fetchImage (payload) {
  return {
    type: FETCH_IMAGE_REQUEST,
    payload
  }
}

export function fetchImageSuccess (payload) {
  return {
    type: FETCH_IMAGE_REQUEST_SUCCESS,
    payload
  }
}
