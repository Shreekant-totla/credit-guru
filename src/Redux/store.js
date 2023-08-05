import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as creditCardReducer } from "./CardPageReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";


const rootReducer=combineReducers({
    creditCardReducer,
    authReducer,
});

export const store =legacy_createStore(rootReducer,applyMiddleware(thunk));