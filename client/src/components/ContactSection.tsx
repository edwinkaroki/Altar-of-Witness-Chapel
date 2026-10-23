export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 font-montserrat mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We'd love to hear from you. Contact us with any questions or to learn more about our church.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-600 font-montserrat mb-2">
                    Location
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    123 Faith Avenue<br />
                    Accra, Ghana<br />
                    P.O. Box 1234
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-600 font-montserrat mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-700">
                    <a href="tel:+233501234567" className="hover:text-pink-600 transition-colors">
                      +233 50 123 4567
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a href="tel:+233502234567" className="hover:text-pink-600 transition-colors">
                      +233 50 223 4567
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-600 font-montserrat mb-2">
                    Email
                  </h3>
                  <p className="text-gray-700">
                    <a href="mailto:info@aowchapel.com" className="hover:text-pink-600 transition-colors">
                      info@aowchapel.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a href="mailto:pastor@aowchapel.com" className="hover:text-pink-600 transition-colors">
                      pastor@aowchapel.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-share-alt text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-600 font-montserrat mb-3">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://wa.me/233501234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div data-aos="fade-left">
            <div className="w-full h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-map text-6xl text-purple-600 mb-4"></i>
                  <p className="text-gray-600 font-semibold">Church Location Map</p>
                  <p className="text-sm text-gray-500 mt-2">Interactive map placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
