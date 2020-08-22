import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './reducers/homeReducer';

const reducers = combineReducers({
    home: homeReducer
})

const middlewares = applyMiddleware(thunk)

const stores = createStore(reducers, undefined, middlewares);

export default stores;
