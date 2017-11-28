import { combineReducers } from 'redux';
import ExpencesByMonthReducer from './reducer_expences_by_month.js';

const rootReducer = combineReducers({
    expencesByMonth: ExpencesByMonthReducer
});

export default rootReducer;