import { useState } from 'react';
import logoImage from '../../../images/images (2).jpeg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Fellowship', href: '#fellowship' },
    { label: 'Youth', href: '#youth' },
    { label: 'Events', href: '#events' },
    { label: 'Sermons', href: '#sermons' },
    { label: 'Donate', href: '#donate' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 gradient-purple-pink shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo & Church Name */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img 
              src={logoImage} 
              alt="Altar of Witness Chapel Logo"
              className="w-16 h-16 object-contain rounded-full"
            />
            <div className="text-white">
              <h1 className="text-xl font-bold font-montserrat">AWC</h1>
              <p className="text-xs text-pink-100"></p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white font-medium hover:text-pink-200 transition-colors duration-300 px-3 py-2 rounded-md"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex gap-3">
            <button className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-pink-100 transition-colors duration-300">
              Join Us
            </button>
            <button className="px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors duration-300">
              Watch Live
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-2xl"
            aria-label="Toggle menu"
          >
            <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white font-medium hover:text-pink-200 transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <button className="flex-1 px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-pink-100 transition-colors duration-300">
                Join Us
              </button>
              <button className="flex-1 px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors duration-300">
                Watch Live
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
