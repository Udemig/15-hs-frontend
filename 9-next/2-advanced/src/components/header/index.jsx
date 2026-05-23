import { fetchRecipes } from "@/utils/service";
import Link from "next/link";

const Header = async () => {
  const data = await fetchRecipes();

  return (
    <header className="flex justify-between items-center px-10 py-5 border-b ">
      <h1>NEXT</h1>

      <nav className="flex gap-2">
        <Link href="/recipes-server" className="text-sm!">
          Recipes (S) - {data.recipes.length}
        </Link>
        <Link href="/recipes-client" className="text-sm!">
          Recipes (C)
        </Link>
        <Link href="/about" className="text-sm!">
          About
        </Link>
        <Link href="/contact" className="text-sm!">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
