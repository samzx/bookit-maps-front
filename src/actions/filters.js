export const setTextFilter = (text = "") => ({
    type: 'SET_TEXT_FILTER',
    text
})

export const setLibraryFilter = (library = "") => ({
    type: 'SET_LIBRARY_FILTER',
    library
})

export const setFloorFilter = (floor = "") => ({
    type: 'SET_FLOOR_FILTER',
    floor
})
