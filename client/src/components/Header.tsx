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
    <header className="sticky top-0 z-50 border-b border-pink-300/15 bg-gradient-to-r from-purple-950 via-purple-900 to-fuchsia-950 shadow-xl shadow-purple-950/30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <a href="#home" className="flex shrink-0 items-center gap-3" aria-label="Altar of Witness Chapel home">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white p-1 shadow-lg shadow-purple-950/30">
              <img
              src={logoImage}
              alt="Altar of Witness Chapel Logo"
              className="h-full w-full rounded-xl object-contain"
              />
            </span>
            <span className="text-white">
              <span className="block font-montserrat text-2xl font-black leading-none tracking-[0.14em] text-white">
              AWC<span className="text-amber-300">.</span>
              </span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.19em] text-white/65 sm:text-[10px]">
              Altar of Witness Chapel
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center gap-0.5 xl:gap-1">
            {navItems.map((item) => (
              <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-2 py-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white xl:px-2.5"
              >
              {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex gap-2">
            <button className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10">
              Join Us
            </button>
            <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-bold text-white transition-all duration-200 hover:from-purple-500 hover:to-pink-500">
              Watch Live
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg border border-white/20 px-3 py-2 text-xl text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="flex flex-col gap-1 border-t border-white/10 pb-4 pt-3 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/85 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <button className="flex-1 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10">
                Join Us
              </button>
              <button className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-bold text-white transition-all duration-200 hover:from-purple-500 hover:to-pink-500">
                Watch Live
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
