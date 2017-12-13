const userReducerDefaultState = { username: "", baseAuth: "", hanging: false };

export default (user = userReducerDefaultState, action) => {
    switch (action.type){
        case 'LOG_IN':
            return  {
                ...action.state,
                username: action.username,
                baseAuth: action.baseAuth
            };
        case 'LOG_OUT':
            // REMINDER: CLEAR BOOKINGS AND OTHER RELATED DATA
            return userReducerDefaultState;
        case 'LOGGING_IN_PROGRESS':
            return {
                ...action.state,
                hanging: true
            };
        case 'LOG_IN_SUCCESS':
            return {
                ...action.state,
                hanging: false
            };
        case 'LOG_IN_FAILED':
            return {
                ...action.state,
                hanging: false
            };
        default:
            return user;
    }
};