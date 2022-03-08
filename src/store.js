import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const InitialState = {};

const reducers = combineReducers({});

const store = createStore(
  reducers,
  InitialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
