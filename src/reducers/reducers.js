import { combineReducers } from 'redux';
import { typeStories } from '../api';

import {
  GET_CONTENT_REQUEST,
  GET_CONTENT_ERROR,
  GET_CONTENT_SUCCESS,
  SET_TYPE_CONTENT
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

function setTypeContent(state = initialState, action) {
  switch (action.type) {
    case SET_TYPE_CONTENT:
      return {
        ...state,
        typeContent: action.payload
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  getContent,
  setTypeContent
})
