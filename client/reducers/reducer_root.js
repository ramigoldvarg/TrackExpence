import { combineReducers } from 'redux';
import AllExpencesReducer from './reducer_expences.js';

const rootReducer = combineReducers({
    expences: AllExpencesReducer
});

export default rootReducer;