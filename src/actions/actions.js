export const SELECT_FILTER = 'SELECT_FILTER';
export const GET_STORY_BEGIN = 'GET_STORY_BEGIN';
export const GET_STORY_SUCCESS = 'GET_STORY_SUCCESS';
export const GET_STORY_ERROR = 'GET_STORY_ERROR';

export const getStoryBegin = () => ({
  type: GET_STORY_BEGIN
});

export const getStorySuccess = story => ({
  type: GET_STORY_SUCCESS,
  payload: { story }
});

export const getStoryError = error => ({
  type: GET_STORY_ERROR,
  error: { error }
});

export const selectFilter = filter => ({
  type: SELECT_FILTER,
  filter: { filter }
});
