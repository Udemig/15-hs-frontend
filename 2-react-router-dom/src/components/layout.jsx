import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  /*
   * Bu nested routes özelliğini kullanıcı yetkilendirme sistemlerinde kullanmayı tercih ederiz.
   * Örneğin bu kapsayıcı route içerisindeki bütün sayfalar sadece admin kullanıcılar tarafından erişilebilir olmasını isteyebilirdim.
   * Bu noktada her sayfaya özel ayrı ayrı bir koşul yazmak yerine bu sayfaları ortak bir kapsayıcı route içerisinde tanımlayıp tek seferde ortak bir koşul yazılabilir
   */
  if ("kullanıcın rolü yazar değilse") {
    // anasayfaya yönlendir
    // navigate("/");
  }

  return (
    <div className="container flex gap-10">
      {/* Bütün alt route'lar için ortak bir aside tanımlamış olduk */}
      <aside className="border p-10 flex flex-col gap-10 rounded-md">
        <NavLink to="/kategori/roman" className="p-5 rounded-md border">
          Roman
        </NavLink>
        <NavLink to="/kategori/hikaye" className="p-5 rounded-md border">
          Hikaye
        </NavLink>
      </aside>

      {/* Outlet: Kapsayıcı route içerisinde, alt route elementinin ekrana basılcağı konumu belirler*/}
      <Outlet />
    </div>
  );
};

export default Layout;
