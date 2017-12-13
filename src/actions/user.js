export const logUserIn = ({username, password}) => {
    const base64 = require('base-64');
    const baseAuth = base64.encode(username + ":" + password);
    return {
        type: 'LOG_IN',
        username,
        baseAuth
    }
}

export const logUserOut = () => ({
    type: 'LOG_OUT',
})

export const logginInProgress = () => ({
    type: 'LOGGING_IN_PROGRESS',
})

export const logInSuccess = () => ({
    type: 'LOG_IN_SUCCESS',
})

export const logInFailed = () => ({
    type: 'LOG_IN_FAILED',
})