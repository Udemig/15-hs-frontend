import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import type { FC } from "react";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Arkaplan */}
        <div className="fixed inset-0 bg-linear-to-br from-dark-bg via-black-100 to-dark-bg -z-10" />

        {/* Işık Hüzmesi */}
        <div className="fixed top-20 left-20 size-72 bg-primary-blue/20 rounded-full blur-xl animate-pulse" />
        <div
          className="fixed bottom-20 right-20 size-72 bg-primary-blue/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <Header />

        <main className="relative z-10 flex-1">
          <Home />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
