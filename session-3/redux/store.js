import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import homeReducer from "./reducers/home";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  home: homeReducer,
});

const middlewares = applyMiddleware(thunk, logger);

const stores = createStore(
  reducers,
  undefined,
  composeWithDevTools(middlewares)
);

export default stores;
