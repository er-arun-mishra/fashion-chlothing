import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //this helps us while debugging our code

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;