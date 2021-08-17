import produce from 'immer';
import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

const blogReducer = (state = initialState.blog, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.SET_BLOG:
        return (draft = action.data);
      default:
        break;
    }
  });
};
export default blogReducer;
