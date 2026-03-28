import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Wrapper = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />

      <main className="flex-grow-1 py-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Wrapper;
