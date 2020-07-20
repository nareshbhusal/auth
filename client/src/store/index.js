import reducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { saveState, loadState } from '../components/localStorage';


const initialState = loadState();

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(
        applyMiddleware(
            reduxThunk
        ),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
