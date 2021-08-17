import * as types from './actionTypes';

export const setBlog = data => ({
  type: types.SET_BLOG,
  data
});
export const setPages = data => ({
  type: types.SET_ALL_PAGES,
  data
});
