export const updateBookings = (bookings) => ({
    type: 'UPDATE_BOOKINGS',
    bookings
})

export const clearBookings = () => ({
    type: 'CLEAR_BOOKINGS',
})