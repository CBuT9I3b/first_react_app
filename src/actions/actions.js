import { HackerNewsApi } from '../api';

// actions type

export const GET_CONTENT_REQUEST = 'GET_CONTENT_REQUEST';
export const GET_CONTENT_ERROR = 'GET_CONTENT_ERROR';
export const GET_CONTENT_SUCCESS = 'GET_CONTENT_SUCCESS';
export const SELECT_TYPE_CONTENT = 'SELECT_TYPE_CONTENT';

// actions creators

export const getContentRequest = typeContent => ({
  type: GET_CONTENT_REQUEST,
  typeContent
});

export const getContentError = error => ({
  type: GET_CONTENT_ERROR,
  error
});

export const getContentSuccess = (typeContent, items) => ({
  type: GET_CONTENT_SUCCESS,
  typeContent,
  items,
  receivedAt: Date.now()
});

export const selectTypeContent = typeContent => ({
  type: SELECT_TYPE_CONTENT,
  typeContent
});

// thunk functions

// export const getStories = (typeStories, quantity) => dispatch => {
//   dispatch(getContentRequest());
//   return HackerNewsApi.getAllStories(typeStories, quantity)
//     .then(response => {
//       dispatch(getContentSuccess(response));
//       return response;
//     })
//     .catch(error => {
//       dispatch(getContentError(error.message));
//       return error;
//     })
// };

function asyncGetStories(typeStories, quantity) {
  return async function(dispatch) {
    dispatch(getContentRequest(typeStories))
    try {
      const stories = await HackerNewsApi.asyncGetAllStories(typeStories, quantity)
      dispatch(getContentSuccess(typeStories, stories))
      return stories
    }   catch (error) {
      dispatch(getContentError(error.message))
      return error
    }
  }
}

function shouldGetStories(state, typeStories) {
  const content = state.contentByType[typeStories]
  if (!content) {
    return true
  } else if (content.isLoading) {
    return false
  }
}

export function getStoriesIfNeeded(typeStories, quantity) {
  return function(dispatch, getState) {
    if (shouldGetStories(getState(), typeStories)) {
      return dispatch(asyncGetStories(typeStories, quantity))
    }
  }
}
