import { combineReducers } from "redux";
import { createStore } from "redux";

import { OanTuTiReducer } from "./OanTuTiReducer";

const rootReducer = combineReducers({
    OanTuTiReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
