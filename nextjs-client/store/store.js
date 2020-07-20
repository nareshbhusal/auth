import { createStore, applyMiddleware, combineReducers } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { saveState, loadState } from '../lib/localStorage';

import reducers from './reducers/index';


const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}


const initStore = () => {
    const store = createStore(
        reducers,
        bindMiddleware([thunkMiddleware])
    );
    store.subscribe(() => {
        saveState(store.getState());
    });

    return store;
}

export const wrapper = createWrapper(initStore);
