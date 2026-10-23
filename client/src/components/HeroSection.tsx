import churchImage from '../../../images/ChatGPT Image Apr 30, 2026, 11_16_00 PM.png';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden py-20 text-center text-white md:py-32"
    >
      <img
        src={churchImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/75 via-slate-950/55 to-purple-950/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="container mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-pink-200">
            Welcome to
          </p>
          <h1 className="mb-4 font-montserrat text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Altar Of Witness Chapel
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-white/85 md:text-2xl">
            We Love People And We Love God
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-bold text-white shadow-lg shadow-purple-950/30 transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-pink-500">
            <i className="fas fa-heart mr-2"></i>
            Join Us
          </button>
          <button className="rounded-lg border border-white/70 bg-white/10 px-8 py-4 font-bold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
            <i className="fas fa-play mr-2"></i>
            Watch Live
          </button>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-12 grid grid-cols-3 divide-x divide-amber-200/60 text-center"
        >
          <div className="min-w-0 px-1 sm:px-3">
            <p className="text-2xl font-bold sm:text-3xl">5000+</p>
            <p className="text-xs text-white/80 sm:text-base">Members</p>
          </div>
          <div className="min-w-0 px-1 sm:px-3">
            <p className="text-2xl font-bold sm:text-3xl">50+</p>
            <p className="text-xs text-white/80 sm:text-base">Ministries</p>
          </div>
          <div className="min-w-0 px-1 sm:px-3">
            <p className="text-2xl font-bold sm:text-3xl">24/7</p>
            <p className="text-xs text-white/80 sm:text-base">Prayer Coverage</p>
          </div>
        </div>
      </div>
    </section>
  );
}
