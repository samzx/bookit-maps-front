const filtersReducerDefaultState = {
    text: '',
    library: '',
    floor: ''
}

export default (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SET_LIBRARY_FILTER':
            return {
                ...state,
                library: action.library
            };
        case 'SET_FLOOR_FILTER':
            return {
                ...state,
                floor: action.floor
            };
        
        default:
            return state;
    }
}