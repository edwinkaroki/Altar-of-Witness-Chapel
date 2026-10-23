export default function ThemeBanner() {
  return (
    <div className="gradient-purple-pink py-6 text-center border-b-4 border-pink-400">
      <div className="container mx-auto">
        <p className="text-pink-100 text-sm font-semibold uppercase tracking-widest mb-2">
          Theme of the Year
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-2">
          Year of Divine Acceleration
        </h2>
        <p className="text-pink-100 text-lg">
          <i className="fas fa-book mr-2"></i>
          Habakkuk 2:3
        </p>
        <div className="mt-4 flex justify-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-pink-200 rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
