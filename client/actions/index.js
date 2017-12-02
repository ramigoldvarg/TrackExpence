import axios from 'axios';

export const ADDED_EXPENCE = 'ADDED_EXPENCE';
export const FETCH_EXPENCES = 'FETCH_EXPENCES';
export const REMOVED_EXPENCE = 'REMOVED_EXPENCE';
export const CHOSEN_MONTH = 'CHOSEN_MONTH';

export function getAllExpences() {
    const request = axios.get('/expences');

    return ({
        type: FETCH_EXPENCES,
        payload: request
    });
}

export function removeExpenceById(expenceId) {
    const request = axios.delete('/expences/' + expenceId);

    return ({
        type: REMOVED_EXPENCE,
        payload:request
    });
}

export function addExpence(expence) {
    const request = axios.post('/expences', expence);

    return ({
        type: ADDED_EXPENCE,
        payload: request 
    });
}

export function choseMonth(chosenMonth) {
    return ({
        type: CHOSEN_MONTH,
        payload: chosenMonth
    })
}