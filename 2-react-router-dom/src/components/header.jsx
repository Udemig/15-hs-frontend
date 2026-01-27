import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-zinc-400 shadow">
      <div className="container flex justify-between">
        <Link to="/" className="text-2xl font-semibold">
          Kitap Kurdu
        </Link>

        <nav className="flex gap-4">
          <NavLink to="/" className="px-4 py-1 rounded-md border border-zinc-300">
            Anasayfa
          </NavLink>
          <NavLink to="/ürünler" className="px-4 py-1 rounded-md border border-zinc-300">
            Ürünler
          </NavLink>
          <NavLink to="/kategori/roman" className="px-4 py-1 rounded-md border border-zinc-300">
            Kategori
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
