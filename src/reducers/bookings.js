export default (state = [], action) => {
    switch(action.type){
        case 'UPDATE_BOOKINGS':
            return action.bookings;
        default:
            return state;
    }
}