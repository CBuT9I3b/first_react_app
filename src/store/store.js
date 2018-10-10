import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { initialState, rootReducer } from '../reducers';

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
