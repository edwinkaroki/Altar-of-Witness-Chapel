export default function HeroSection() {
  return (
    <section id="home" className="gradient-purple-pink py-20 md:py-32 text-center text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 opacity-5 rounded-full blur-2xl"></div>

      <div className="container mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-6">
          <p className="text-pink-100 text-sm font-semibold uppercase tracking-widest mb-4">
            Welcome to
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat mb-4">
            Altar Of Witness Chapel
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
            We Love People And We Love God </p>
            
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-pink-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <i className="fas fa-heart mr-2"></i>
            Join Us
          </button>
          <button className="px-8 py-4 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white">
            <i className="fas fa-play mr-2"></i>
            Watch Live
          </button>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="mt-12 flex justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-bold">5000+</p>
            <p className="text-pink-100">Members</p>
          </div>
          <div className="border-l border-pink-300"></div>
          <div>
            <p className="text-3xl font-bold">50+</p>
            <p className="text-pink-100">Ministries</p>
          </div>
          <div className="border-l border-pink-300"></div>
          <div>
            <p className="text-3xl font-bold">24/7</p>
            <p className="text-pink-100">Prayer Coverage</p>
          </div>
        </div>
      </div>
    </section>
  );
}
