export default function ThemeBanner() {
  return (
    <section className="border-y border-amber-300/20 bg-gradient-to-br from-purple-950 via-purple-900 to-fuchsia-950 py-8 text-white md:py-10">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-200 md:text-xs">
            <span className="h-px w-6 bg-amber-300/80" />
            Our theme
            <span className="h-px w-6 bg-amber-300/80" />
          </p>
          <h2 className="mb-3 text-2xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
            Year of Divine
            <span className="block font-light text-amber-200">Acceleration</span>
          </h2>
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 shadow-lg backdrop-blur-sm md:text-sm">
            <i className="fas fa-book-open text-amber-200" aria-hidden="true"></i>
            Habakkuk 2:3
          </p>
        </div>
      </div>
    </section>
  );
}
