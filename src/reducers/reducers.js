import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_ERROR,
  GET_ITEMS_SUCCESS
} from '../actions';

export const initialState = {
  isLoading: false,
  isError: false,
  items: []
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_ITEMS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.error
      }
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.story
      }
    default:
      return state
  }
}
