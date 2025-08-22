import { Phone } from "lucide-react";
import aboutPic from "../assets/Pic/hero1.png"; // apna image ka path sahi rakho

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to Dream Tailors And Fabric – where craftsmanship meets
                elegance. With years of expertise in premium tailoring and
                fabric selection, we've established ourselves as a leading
                destination for bespoke clothing solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence reflects in every stitch, every
                fabric choice, and every finished garment that leaves our
                workshop.
              </p>
            </div>

            {/* Right side - Image */}
            <div>
              <img
                src={aboutPic}
                alt="Dream Tailors and Fabrics"
                className="rounded-2xl shadow-lg w-full object-cover h-96"
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To craft exceptional garments that transform not just how you look,
            but how you feel. We're dedicated to delivering unparalleled
            quality, style, and satisfaction to every client who walks through
            our doors.
          </p>
        </div>

        {/* Contact & Social */}
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl shadow p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            {/* Phone Section */}
            <div>
              <p className="text-lg text-gray-700 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-700" />
                Phone:
              </p>
              <div className="mt-2 space-y-1">
                <a className="text-lg text-gray-800 hover:text-indigo-600 block">
                  03 02 1206664 (WhatsApp Only)
                </a>
                <a
                  href="tel:+19876543210"
                  className="text-lg text-gray-800 hover:text-indigo-600 block"
                >
                  03 02 1206664
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Available Mon - Sat, 9:00 AM - 6:00 PM
              </p>
            </div>

            {/* Social Section */}
            <div>
              <p className="text-lg text-gray-700 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 7H13v5h-2V9H8.5V7H11V5.5C11 4.12 12.12 3 13.5 3H15v2z" />
                </svg>
                Follow us
              </p>
              <div className="mt-3 flex items-center space-x-3">
                <a
                  href="https://facebook.com/dreamtailorsandfabrics"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.3c0-2.2 1.3-3.4 3.3-3.4.96 0 1.97.17 1.97.17v2.2h-1.12c-1.1 0-1.44.68-1.44 1.38v1.66h2.46l-.39 2.9h-2.07v7A10 10 0 0022 12z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/dreamtailorsandfabrics"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-600 hover:bg-gradient-to-tr hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white p-2 rounded-full transition duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.3A3.7 3.7 0 1015.7 12 3.7 3.7 0 0012 8.3zm6.4-.9a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z" />
                  </svg>
                </a>

                <a
                  href="https://wa.me/03021206664"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-gray-600 hover:text-blue-700"
                >
                  <Phone className="w-6 h-6 " />
                </a>
                <a
                  href="https://youtube.com/dreamtailorsandfabrics"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-gray-600 hover:text-red-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 7.5a3 3 0 00-2.1-2.1C19.3 4.9 12 4.9 12 4.9s-7.3 0-8.9.5A3 3 0 001 7.5 31 31 0 001 16.5a3 3 0 002.1 2.1C4.7 19.1 12 19.1 12 19.1s7.3 0 8.9-.5A3 3 0 0023 16.5 31 31 0 0023 7.5zM10 15V9l5 3-5 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
