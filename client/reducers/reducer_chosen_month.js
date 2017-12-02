import { ADDED_EXPENCE, REMOVED_EXPENCE, CHOSEN_MONTH } from '../actions/index.js';
import moment from 'moment';

export default function(state = null, action) {
    switch(action.type) {
        case (CHOSEN_MONTH):
            return action.payload;
        case (ADDED_EXPENCE):
            return moment(action.payload.data.date).format('MM-YYYY');
        case (REMOVED_EXPENCE):
            return state;
        default:
            break;
    }
    
    return state;
}