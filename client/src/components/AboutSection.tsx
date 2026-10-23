export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 font-montserrat mb-6">
              About Our Church
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Altar Of Witness Chapel is a vibrant, Spirit-filled community of believers dedicated to worshipping God, advancing His kingdom, and transforming lives through the power of the Gospel.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded on the principles of faith, fellowship, and service, we believe in creating a welcoming environment where every individual can experience God's love and grow spiritually.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-cross text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-600 font-montserrat">Our Mission</h3>
                  <p className="text-gray-700">To preach the Gospel, make disciples, and impact our community with God's transformative love.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-eye text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-600 font-montserrat">Our Vision</h3>
                  <p className="text-gray-700">To be a beacon of hope, a center of spiritual excellence, and a catalyst for kingdom advancement.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-heart text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-600 font-montserrat">Our Values</h3>
                  <p className="text-gray-700">Faith, integrity, compassion, excellence, and community-focused service.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div data-aos="fade-left" className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-church text-6xl text-purple-600 mb-4"></i>
                  <p className="text-gray-600 font-semibold">Church Image</p>
                </div>
              </div>
            </div>
            {/* Decorative circle */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
