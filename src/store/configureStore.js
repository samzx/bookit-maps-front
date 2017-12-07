import {createStore, combineReducers} from 'redux';
import filtersReducer from '../reducers/filters';
import resourcesReducer from '../reducers/resources';
import bookingsReducer from '../reducers/bookings';

export default () => {
    const store = createStore(
        combineReducers({
            filters: filtersReducer,
            resources: resourcesReducer,
            bookings: bookingsReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
