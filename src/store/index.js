import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';

import reducer from './reducer.js';

import thunkMiddleware from 'redux-thunk'
// const stroeEnhancer = applyMiddleware(thunkMiddleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true
}) || compose;
const store = createStore(reducer, /* preloadedState, */
    composeEnhancers(applyMiddleware(thunkMiddleware))
);
// 应用中间件
export default store;
