import Feed from "./pages/feed";
import Search from "./pages/search";
import Detail from "./pages/detail";
import Category from "./pages/category";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />

        <div className="flex w-full">
          <Sidebar />

          <main className="flex-1 h-screen w-full overflow-x-hidden overflow-y-auto">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/watch" element={<Detail />} />
              <Route path="/results" element={<Search />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
