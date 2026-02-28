import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter-slice";
import crudReducer from "./slices/crud-slice";
import userCReducer from "./slices/user-slice-c";
import userUReducer from "./slices/user-slice-u";

/*
 * createStore vs configureStore
 * reducer'ları otomatik olarak birleştirir (combineReducers'a gerek yok)
 * redux thunk gelir
 * redux devtools gelir
 */

const store = configureStore({ reducer: { counterReducer, crudReducer, userCReducer, userUReducer } });

export default store;
