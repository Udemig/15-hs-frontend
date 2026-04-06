import { FOOTER_LINKS, SOCIAL_LINKS } from "../../data/navigation";

const Footer = () => {
  return (
    <footer className="w-full border-t border-outline-variant/15 bg-background mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <span className="font-headline font-bold text-tertiary text-xl">
            The Artisanal Scoop
          </span>
          <p className="font-body text-xs uppercase tracking-widest text-secondary">
            &copy; 2024 The Artisanal Scoop. Taze ve Zanaatkar.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              className="font-body text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              className="text-tertiary hover:text-primary transition-colors"
              href={social.href}
              aria-label={social.label}
            >
              <span
                className="material-symbols-outlined"
                data-icon={social.icon}
              >
                {social.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
