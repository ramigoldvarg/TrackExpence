import { combineReducers } from 'redux';
import ExpencesByMonthReducer from './reducer_expences_by_month.js';
import ChosenMonthReducer from './reducer_chosen_month.js';

const rootReducer = combineReducers({
    expencesByMonth: ExpencesByMonthReducer,
    chosenMonth: ChosenMonthReducer
});

export default rootReducer;