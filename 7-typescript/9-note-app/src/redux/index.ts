import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import store from "./store";

// Store'un tipi
export type RootState = ReturnType<typeof store.getState>;

// Store'a abone olurken her seferinde tip tanımlamak zorunda kalmamak için fonksiyon
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// app dispatch tipini tanımla
export type AppDispatch = typeof store.dispatch;

// Tipi tanımlanmış dispatch hooku
export const useAppDispatch = () => useDispatch<AppDispatch>();
