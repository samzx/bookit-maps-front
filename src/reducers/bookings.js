export default (defaultState = [], action) => {
    switch(action.type){
        case 'UPDATE_BOOKINGS':
            return action.bookings;
        case 'CLEAR_BOOKINGS':
            return defaultState;
        default:
            return defaultState;
    }
}