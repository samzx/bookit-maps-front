const userReducerDefaultState = { username: "" };

export default (user = userReducerDefaultState, action) => {
    switch (action.type){
        case 'LOG_IN':
            return  {
                ...action.state,
                username: action.username
            };
        case 'LOG_OUT':
            return userReducerDefaultState;
        default:
            return user;
    }
};