import { thunk } from "redux-thunk";
import restaurantReducer from "./reducers/restaurant-reducer";
import cartReducer from "./reducers/cart-reducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

// reducer'ları birleştirelim
const rootReducer = combineReducers({ restaurantReducer, cartReducer });

// devtools uzantısı için composeEnhancers tanımlayalım
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store'u oluşturalım
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
