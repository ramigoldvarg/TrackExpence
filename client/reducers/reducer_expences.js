import { FETCH_EXPENCES, ADDED_EXPENCE, REMOVED_EXPENCE } from '../actions/index.js';

export default function(state = null, action) {
        switch (action.type) {
                case (REMOVED_EXPENCE):
                        return state.reduce((result, currValue) => currValue._id == action.payload.data ? result:result.concat(currValue), [] );
                case (ADDED_EXPENCE):
                        return state.concat(action.payload.data);
                case (FETCH_EXPENCES): 
                        return (action.payload.data);
        }

        return state;
} 