export default (state = [], action) => {
    switch(action.type){
        case 'UPDATE_BOOKINGS':
            return {
                state: action.bookings
            };
        default:
            return state;
    }
}