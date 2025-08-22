import { useState } from "react";
import { ArrowLeft } from "lucide-react"; // arrow icon (lucide-react use karo)

export function AuthSidebar({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-[70%] sm:h-full w-[60%] sm:w-[60%] md:w-[400px] bg-gray-700 shadow-lg transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full p-4 sm:p-6">
          
          {/* Back Arrow in SignUp Mode */}
          {!isLogin && (
            <button
              onClick={() => setIsLogin(true)}
              className="flex items-center text-white hover:text-[#ff9800] mb-1"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back
            </button>
          )}

          {/* Header */}
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 mt-2 text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          {/* Login Form */}
          {isLogin && (
            <form className="flex flex-col gap-2 sm:gap-3">
              <input
                type="email"
                placeholder="Email"
                className="p-3 sm:p-4 rounded-md border border-gray-400 bg-gray-700 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#468A9A]"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 sm:p-4 rounded-md border border-gray-400 bg-gray-700 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#468A9A] mt-3"
              />
              <button className="bg-gray-900 text-white py-3 sm:py-4 rounded-md hover:bg-[#3a6f7a] transition-colors duration-300 mt-4">
                Login
              </button>
              <div className="flex flex-col sm:flex-row justify-between mt-2 text-sm sm:text-base gap-2 sm:gap-0">
                <button type="button" className="text-white hover:text-[#ff9800]">
                  Forgot Password?
                </button>
                <button
                  type="button"
                  className="text-white hover:text-[#ff9800] mt-4 sm:mt-0"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </button>
              </div>
            </form>
          )}

          {/* Sign Up Form */}
          {!isLogin && (
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 sm:p-3 rounded-md border border-gray-400 bg-gray-700 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#468A9A]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 sm:p-3 rounded-md border border-gray-400 bg-gray-700 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#468A9A]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 sm:p-3 rounded-md border border-gray-400 bg-gray-700 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#468A9A]"
              />
              <textarea
                placeholder="Address"
                rows="3"
                className="w-full p-2 sm:p-3 rounded-md border border-gray-400 bg-gray-700 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#468A9A] resize-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 sm:p-3 rounded-md border border-gray-400 bg-gray-700 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#468A9A]"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 sm:p-3 rounded-md border border-gray-400 bg-gray-700 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#468A9A]"
              />
              <button className="w-full bg-gray-900 text-white py-2 sm:py-3 rounded-md hover:bg-[#3a6f7a] transition-colors duration-300 mt-4">
                Sign Up
              </button>
            </form>
          )}

          {/* Back to Home Button */}
          {isLogin && (
            <div className="mt-auto">
              <button
                onClick={onClose}
                className="bg-gray-700 text-white py-3 sm:py-4 px-4 rounded-md  hover:text-orange-400 transition-colors duration-300 "
              >
                Back to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
