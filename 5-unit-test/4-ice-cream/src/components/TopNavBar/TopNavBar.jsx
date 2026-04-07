import { useState } from "react";
import { NAV_LINKS } from "../../data/navigation";

const TopNavBar = ({ cartItemCount = 0, onCartClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl transition-all duration-300">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <a className="text-2xl font-black italic text-tertiary font-headline" href="#">
          The Artisanal Scoop
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              className={
                link.active
                  ? "font-headline font-bold text-primary border-b-2 border-primary pb-1 text-sm tracking-tight transition-all"
                  : "font-headline font-medium text-sm tracking-tight text-tertiary hover:text-primary transition-colors"
              }
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="text-primary hover:opacity-80 transition-all active:scale-95" aria-label="Dil değiştir">
            <span className="material-symbols-outlined" data-icon="language">
              language
            </span>
          </button>

          <button
            className="relative text-primary hover:opacity-80 transition-all active:scale-95"
            aria-label="Sepet"
            onClick={onCartClick}
          >
            <span className="material-symbols-outlined" data-icon="shopping_cart">
              shopping_cart
            </span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-on-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {cartItemCount}
              </span>
            )}
          </button>

          <button
            className="md:hidden text-tertiary"
            aria-label="Menü"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined" data-icon="menu">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-background/95 backdrop-blur-xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              className={
                link.active
                  ? "font-headline font-bold text-primary text-sm"
                  : "font-headline font-medium text-sm text-tertiary"
              }
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default TopNavBar;
