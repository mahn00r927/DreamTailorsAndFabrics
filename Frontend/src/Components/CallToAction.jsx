export default function CallToAction({ onOpenSidebar }) {
  return (
    <section className="py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join us today and take the first step towards achieving your goals with our platform.
        </p>
        <button
          onClick={onOpenSidebar}
          className="text-white bg-orange-700 font-semibold py-3 px-8 rounded-full 
          shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-orange-600"
        >
          Get Started Now
        </button>
      </div>
    </section>
  );
}
