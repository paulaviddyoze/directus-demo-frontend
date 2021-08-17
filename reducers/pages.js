import produce from 'immer';
import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

const pagesReducer = (state = initialState.pages, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.SET_ALL_PAGES:
        return (draft = action.data);
      default:
        break;
    }
  });
};
export default pagesReducer;
