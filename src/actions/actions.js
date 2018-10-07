import { HackerNewsApi } from '../api';

// actions type

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_ERROR = 'GET_STORY_ERROR';
export const GET_ITEMS_SUCCESS = 'GET_STORY_SUCCESS';

// actions creators

export const getItemsRequest = () => ({
  type: GET_ITEMS_REQUEST
});

export const getItemsError = error => ({
  type: GET_ITEMS_ERROR,
  error: { error }
});

export const getItemsSuccess = items => ({
  type: GET_ITEMS_SUCCESS,
  story: items
});

// thunk functions

export const getItems = (typeStory, quantity) => dispatch => {
  dispatch(getItemsRequest());
  return HackerNewsApi.getAllStories(typeStory, quantity)
    .catch(error => dispatch(getItemsError(error)))
    .then(response => {
      dispatch(getItemsSuccess(response.data));
      return response.data;
    })
};
