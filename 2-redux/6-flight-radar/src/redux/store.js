import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/flight-slice";

const store = configureStore({ reducer: { flightReducer } });

export default store;
