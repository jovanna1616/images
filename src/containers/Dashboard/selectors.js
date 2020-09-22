import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDashboard = state => state.dashboard || initialState;

const makeSelectImageUrl = () => 
  createSelector(
    selectDashboard,
    substate => substate.imageUrl
  );

export {
  makeSelectImageUrl
};
