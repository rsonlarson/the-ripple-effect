import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="max-w-[120rem] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl mb-4">The Ripple Effect</h3>
            <p className="font-paragraph text-sm opacity-90">
              Creating positive change through community-driven initiatives, one small act at a time.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Home
              </Link>
              <Link to="/about" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                About
              </Link>
              <Link to="/projects" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Projects
              </Link>
              <Link to="/donate" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Donate
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-heading text-lg mb-4">Contact</h4>
            <div className="font-paragraph text-sm opacity-90 space-y-2">
              <p>Email: sorengreenlarson@gmail.com</p>
              <p>Phone: (630) 746-5714</p>

            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="font-paragraph text-sm opacity-75">
            © {new Date().getFullYear()} The Ripple Effect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
