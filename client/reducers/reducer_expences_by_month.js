import { FETCH_EXPENCES, ADDED_EXPENCE, REMOVED_EXPENCE } from '../actions/index.js';
import moment from 'moment';

export default function(state = null, action) {
        switch (action.type) {
                case (REMOVED_EXPENCE):
                        let newState = {};
                        for (let month in state) {
                                newState[month] = state[month].reduce((result, currValue) => currValue._id == action.payload.data ? result:result.concat(currValue), []);
                        }
                        return (newState);
                case (ADDED_EXPENCE):
                        let data = action.payload.data;
                        let newAState = {};
                        let bDidAdd = false;

                        for (let currMonth in state) {
                                newAState[currMonth] = state[currMonth];

                                if (currMonth == moment(data.date).format("MM-YYYY")) {
                                        bDidAdd = true;
                                        newAState[currMonth] = newAState[currMonth].concat(data);
                                }
                        }

                        if (!bDidAdd) {
                                newAState[moment(data.date).format("MM-YYYY")] = [].concat(data);
                        }

                        return (newAState);
                case (FETCH_EXPENCES):
                        let newEState = {};
                        action.payload.data.map((value) => {
                                let currDate = moment(value.date).format("MM-YYYY");

                                if (newEState[currDate]) {
                                        newEState[currDate] = newEState[currDate].concat(value);
                                } else {
                                        newEState[currDate] = [].concat(value);
                                }
                        });
                        
                        return (newEState);
                default:
                        break;
        }

        return state;
} 