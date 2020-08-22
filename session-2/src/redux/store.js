import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './reducers/homeReducer';
import userReducer from './reducers/user';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    home: homeReducer,
    user: userReducer,
})

const middlewares = applyMiddleware(thunk)

const stores = createStore(reducers, undefined, composeWithDevTools(middlewares));

export default stores;
