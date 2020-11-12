import {combineReducers} from 'redux';
import {onSearchChange, onRequestRobots} from './reducers';

const rootReducer = combineReducers({onSearchChange, onRequestRobots})
export default rootReducer;

