import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';//waits for actions that return a function

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
