import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import basketReducer from "../store/basketSlice";

export function renderWithStore(ui, { preloadedState, store, ...renderOptions } = {}) {
  const testStore =
    store ||
    configureStore({
      reducer: { basket: basketReducer },
      preloadedState,
    });

  function Wrapper({ children }) {
    return <Provider store={testStore}>{children}</Provider>;
  }

  return { store: testStore, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from "@testing-library/react";
