import {createStore, combineReducers} from 'redux';
import filtersReducer from '../reducers/filters';
import resourcesReducer from '../reducers/resources';
import bookingsReducer from '../reducers/bookings';
import userReducer from '../reducers/user';

// Initilises Redux Store
export default () => {
    const store = createStore(
        combineReducers({
            filters: filtersReducer,
            resources: resourcesReducer,
            bookings: bookingsReducer,
            user: userReducer
        }),
        // Allow Redux dev tools (Chrome extension)
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
