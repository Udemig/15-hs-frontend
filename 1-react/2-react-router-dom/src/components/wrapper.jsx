import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Wrapper = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Wrapper;
