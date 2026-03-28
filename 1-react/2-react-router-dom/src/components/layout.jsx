import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  /*
   * Bu nested routes özelliğini kullanıcı yetkilendirme sistemlerinde kullanmayı tercih ederiz.
   * Örneğin bu kapsayıcı route içerisindeki bütün sayfalar sadece admin kullanıcılar tarafından erişilebilir olmasını isteyebilirdim.
   * Bu noktada her sayfaya özel ayrı ayrı bir koşul yazmak yerine bu sayfaları ortak bir kapsayıcı route içerisinde tanımlayıp tek seferde ortak bir koşul yazılabilir
   */

  return (
    <div className="container d-flex gap-4">
      {/* Bütün alt route'lar için ortak bir aside tanımlamış olduk */}
      <aside className="border rounded p-4 d-flex flex-column gap-3">
        <NavLink
          to="/kategori/roman"
          className={({ isActive }) => `btn btn-outline-secondary text-start ${isActive ? "active" : ""}`}
        >
          Roman
        </NavLink>
        <NavLink
          to="/kategori/hikaye"
          className={({ isActive }) => `btn btn-outline-secondary text-start ${isActive ? "active" : ""}`}
        >
          Hikaye
        </NavLink>
      </aside>

      {/* Outlet: Kapsayıcı route içerisinde, alt route elementinin ekrana basılcağı konumu belirler*/}
      <Outlet />
    </div>
  );
};

export default Layout;
