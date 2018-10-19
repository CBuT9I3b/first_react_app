import { HackerNewsApi } from '../api';

// actions type

export const GET_CONTENT_REQUEST = 'GET_CONTENT_REQUEST';
export const GET_CONTENT_ERROR = 'GET_CONTENT_ERROR';
export const GET_CONTENT_SUCCESS = 'GET_CONTENT_SUCCESS';
export const SET_TYPE_CONTENT = 'SET_TYPE_CONTENT';

// actions creators

export const getContentRequest = () => ({
  type: GET_CONTENT_REQUEST
});

export const getContentError = error => ({
  type: GET_CONTENT_ERROR,
  payload: error
});

export const getContentSuccess = items => ({
  type: GET_CONTENT_SUCCESS,
  payload: items
});

export const setTypeContent = (typeContent) => ({
  type: SET_TYPE_CONTENT,
  payload: typeContent
});

// thunk functions

export const getStories = (typeStories, quantity) => dispatch => {
  dispatch(getContentRequest());
  return HackerNewsApi.getAllStories(typeStories, quantity)
    .catch(error => dispatch(getContentError(error)))
    .then(response => {
      dispatch(getContentSuccess(response));
      return response;
    })
};
