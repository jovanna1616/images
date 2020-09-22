import produce from 'immer';
import { DEFAULT_ACTION, FETCH_IMAGE_REQUEST_SUCCESS  } from './constants';

export const initialState = {
  imageUrl: ''
};

/* eslint-disable default-case */
const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    const payload = action.payload
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      
      case FETCH_IMAGE_REQUEST_SUCCESS:
        draft.imageUrl = payload;
        break;
    }
  });

export default dashboardReducer;
