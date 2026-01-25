import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="w-full bg-background border-b border-primary/10">
      <div className="max-w-[120rem] mx-auto px-8 py-6">
        <nav className="flex justify-between items-center">
          <Link to="/" className="font-heading text-2xl text-primary hover:text-secondary transition-colors">
            The Ripple Effect
          </Link>
          
          <div className="flex gap-8 items-center">
            <Link 
              to="/" 
              className={`font-paragraph text-base transition-colors ${
                isActive('/') ? 'text-primary font-semibold' : 'text-secondary hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-paragraph text-base transition-colors ${
                isActive('/about') ? 'text-primary font-semibold' : 'text-secondary hover:text-primary'
              }`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`font-paragraph text-base transition-colors ${
                isActive('/projects') ? 'text-primary font-semibold' : 'text-secondary hover:text-primary'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/donate" 
              className={`font-paragraph text-base transition-colors ${
                isActive('/donate') ? 'text-primary font-semibold' : 'text-secondary hover:text-primary'
              }`}
            >
              Donate
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
