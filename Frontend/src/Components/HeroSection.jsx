import HeroImg from "../assets/Pic/hero3.png";

export function HeroSection() {
  const handleScroll = () => {
    const section = document.getElementById("fabric");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[200px] sm:h-[300px] md:h-[500px]">
      <img
        src={HeroImg}
        alt="Tailored suit or fashion background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10">
        <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-5xl">
          Perfect Fit, Perfect Style
        </h2>
        <p className="text-white text-sm sm:text-base md:text-lg mt-2 max-w-xl">
          Experience premium tailoring with your dream designs, crafted to
          perfection.
        </p>
        <button
          onClick={handleScroll}
          className="mt-4 px-6 py-2 bg-[#ff9800] text-white font-medium rounded-lg hover:bg-[#e68900] transform hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          Explore Collection
        </button>
      </div>
    </section>
  );
}
