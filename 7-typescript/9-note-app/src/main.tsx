import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store, { persistor } from "./redux/store.ts";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <ToastContainer autoClose={2500} theme="dark" hideProgressBar />
    </PersistGate>
  </Provider>,
);
