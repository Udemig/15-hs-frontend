import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white flex flex-col">
      <Header />

      {/* Child route'un ekrana geliceği konumu belirle */}
      <main className="container flex-1 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
