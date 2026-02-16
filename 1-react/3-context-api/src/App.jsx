import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Basket from "./pages/basket";
import Header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sepet" element={<Basket />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
