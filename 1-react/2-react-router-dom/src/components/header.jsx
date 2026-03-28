import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-bottom shadow-sm py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="fs-3 fw-semibold text-decoration-none text-dark">
          Kitap Kurdu
        </Link>

        <nav className="d-flex gap-2">
          <NavLink to="/" className={({ isActive }) => `btn btn-outline-secondary ${isActive ? "active" : ""}`}>
            Anasayfa
          </NavLink>
          <NavLink to="/ürünler" className={({ isActive }) => `btn btn-outline-secondary ${isActive ? "active" : ""}`}>
            Ürünler
          </NavLink>
          <NavLink
            to="/kategori/roman"
            className={({ isActive }) => `btn btn-outline-secondary ${isActive ? "active" : ""}`}
          >
            Kategori
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
