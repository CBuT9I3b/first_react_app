import { combineReducers } from 'redux';
import { typeStories } from '../api';

import {
  GET_CONTENT_REQUEST,
  GET_CONTENT_ERROR,
  GET_CONTENT_SUCCESS
} from '../actions';

export const initialState = {
  isLoading: false,
  isError: false,
  items: [],
  typeContent: typeStories.NEW
}

function getContent(state = initialState, action) {
  switch (action.type) {
    case GET_CONTENT_REQUEST:
      return {
        ...state,
        isLoading: true
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
        items: action.payload
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  getContent
})
