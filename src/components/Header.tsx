import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Close the mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const linkBase =
    "font-paragraph text-base transition-colors py-2 md:py-0";
  const linkClass = (path: string) =>
    `${linkBase} ${
      isActive(path)
        ? "text-primary font-semibold"
        : "text-secondary hover:text-primary"
    }`;

  return (
    <header className="w-full bg-background border-b border-primary/10">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="font-heading text-xl sm:text-2xl text-primary hover:text-secondary transition-colors"
          >
            The Ripple Effect
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-primary/20 px-3 py-2 text-secondary hover:text-primary hover:border-primary/40 transition-colors"
            aria-label="Open menu"
            aria-controls="primary-navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="font-paragraph text-sm">
              {mobileOpen ? "Close" : "Menu"}
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/about" className={linkClass("/about")}>
              About
            </Link>
            <Link to="/projects" className={linkClass("/projects")}>
              Projects
            </Link>
            <Link to="/donate" className={linkClass("/donate")}>
              Donate
            </Link>
          </div>
        </nav>

        {/* Mobile panel */}
        <div
          id="primary-navigation"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ease-out ${
            mobileOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 rounded-lg border border-primary/10 bg-background p-2">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/about" className={linkClass("/about")}>
              About
            </Link>
            <Link to="/projects" className={linkClass("/projects")}>
              Projects
            </Link>
            <Link to="/donate" className={linkClass("/donate")}>
              Donate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
