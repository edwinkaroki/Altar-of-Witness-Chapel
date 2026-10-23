interface FooterProps {
  showBackToTop: boolean;
  onBackToTop: () => void;
}

export default function Footer({ showBackToTop, onBackToTop }: FooterProps) {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Fellowship', href: '#fellowship' },
    { label: 'Youth', href: '#youth' },
    { label: 'Football', href: '#football' },
    { label: 'Sermons', href: '#sermons' },
    { label: 'Donate', href: '#donate' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <i className="fas fa-cross text-purple-600 text-lg"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold font-montserrat">AOW Chapel</h3>
                <p className="text-xs text-pink-200">Altar Of Witness</p>
              </div>
            </div>
            <p className="text-pink-100 text-sm leading-relaxed">
              A vibrant community of believers dedicated to worshipping God, advancing His kingdom, and transforming lives through the Gospel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-montserrat mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-pink-100 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-montserrat mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-pink-100">
              <p>
                <i className="fas fa-map-marker-alt text-pink-300 mr-2"></i>
                123 Faith Avenue, Accra, Ghana
              </p>
              <p>
                <i className="fas fa-phone text-pink-300 mr-2"></i>
                <a href="tel:+233501234567" className="hover:text-white transition-colors">
                  +233 50 123 4567
                </a>
              </p>
              <p>
                <i className="fas fa-envelope text-pink-300 mr-2"></i>
                <a href="mailto:info@aowchapel.com" className="hover:text-white transition-colors">
                  info@aowchapel.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-pink-400 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-pink-100 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; 2026 Altar Of Witness Chapel. All rights reserved.
          </p>
          {showBackToTop && (
            <button
              onClick={onBackToTop}
              className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-pink-100 transition-colors text-sm"
            >
              <i className="fas fa-arrow-up mr-2"></i>
              Back to Top
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
