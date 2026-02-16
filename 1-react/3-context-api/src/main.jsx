import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { ProductProvider } from "./context/productContext.jsx";
import { BasketProvider } from "./context/basketContext.jsx";

createRoot(document.getElementById("root")).render(
  <BasketProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </BasketProvider>,
);
