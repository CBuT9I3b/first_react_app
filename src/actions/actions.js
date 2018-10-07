// actions type

export const GET_ITEMS_REQUEST = 'GET_STORY_BEGIN';
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

export const getItemsSuccess = story => ({
  type: GET_ITEMS_SUCCESS,
  response: { items }
});

// thunk functions
