export const logUserIn = (username) => ({
    type: 'LOG_IN',
    username
})

export const logUserOut = () => ({
    type: 'LOG_OUT',
})