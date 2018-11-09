import { combineReducers } from 'redux';

import {
  GET_CONTENT_REQUEST,
  GET_CONTENT_ERROR,
  GET_CONTENT_SUCCESS
} from '../actions';

function getContent(state = {
  isLoading: false,
  isError: false,
  items: []
}, action) {
  switch (action.type) {
    case GET_CONTENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case GET_CONTENT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.payload
      }
    case GET_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        items: action.payload
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  getContent
})
