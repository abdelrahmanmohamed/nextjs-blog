import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const initialState = {};

const middlewares = [thunk];

//Create Store
export default createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middlewares)
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);