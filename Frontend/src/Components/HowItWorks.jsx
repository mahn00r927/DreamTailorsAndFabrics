import { useNavigate } from "react-router-dom";

export default function HowItWorks() {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="how-it-works">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          id="how-it-works"
          className="text-3xl font-bold text-gray-900 mb-10"
        >
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div
            onClick={() => scrollToSection("fabric")}
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-2 transform transition"
          >
            <svg
              className="w-20 h-20 text-orange-500 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              role="img"
              aria-label="Choose Fabric"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7h18M3 12h18M3 17h18"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800">
              Choose Fabric
            </h3>
            <p className="text-gray-600">
              Browse our premium collection and pick your favorite fabric.
            </p>
          </div>

          <div
            onClick={() => navigate("/tailoring")}
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-2 transform transition"
          >
            <svg
              className="w-20 h-20 text-orange-500 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              role="img"
              aria-label="Add Measurements"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800">
              Add Measurements
            </h3>
            <p className="text-gray-600">
              Enter your body measurements with our step-by-step guide.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-2 transform transition">
            <svg
              className="w-20 h-20 text-orange-500 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              role="img"
              aria-label="Get Tailored Outfit"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800">
              Get Your Outfit
            </h3>
            <p className="text-gray-600">
              Sit back while we craft your perfect outfit and deliver to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
