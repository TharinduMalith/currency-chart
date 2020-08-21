import  {createStore, combineReducers, applyMiddleware}  from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import test from "./src/reducers/TestReducer";

const logger = createLogger();

export default createStore(
    combineReducers({
        test ,
    }),
    {},
    applyMiddleware(logger, thunk)
);
