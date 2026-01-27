import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Detail from "./pages/detail";
import NotFound from "./pages/not-found";
import Novel from "./pages/novel";
import Story from "./pages/story";
import Layout from "./components/layout";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ürünler" element={<Products />} />

            <Route path="/ürünler/:id" element={<Detail />} />

            <Route path="/kategori" element={<Layout />}>
              <Route path="roman" element={<Novel />} />
              <Route path="hikaye" element={<Story />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
