import { useState } from "react";
import { Menu, X, LogOut, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    alert("Logged out successfully");
  };

  const handleChat = () => {
    alert("Open admin chat");
  };

  return (
    <nav className="relative flex flex-col px-6 py-6 bg-gray-600 md:py-10 md:h-[160px] w-full font-[Montserrat] shadow-lg">
      {/* Logo + Mobile Menu Button */}
      <div className="flex w-full items-center justify-between md:block">
        <h1 className="text-white font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
          Dream Tailors & Fabrics
        </h1>
        <h2 class="text-2xl font-bold text-white mt-6 hidden md:block text-center">
          Admin Panel
        </h2>

        {/* Mobile Hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      <ul
        className={`
          flex list-none text-lg transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "flex flex-col mt-6 gap-4"
              : "hidden md:flex md:mt-10 md:justify-center gap-8"
          }
        `}
      >
        {isOpen && (
          <>
            <li>
              <button
                onClick={handleChat}
                className="flex items-center gap-2 px-4 py-2 rounded-lg 
                    text-white hover:bg-[#ff9800] 
                   transition-all duration-300 shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Chats
              </button>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg 
                   text-white hover:bg-[#ff9800] 
                   transition-all duration-300 shadow-md"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </li>
          </>
        )}
      </ul>

      {/* Desktop Right Side Buttons */}
      <div className="absolute bottom-4 right-8 hidden md:flex flex-row items-center space-x-6">
        <button
          onClick={handleChat}
          className="flex items-center text-white hover:text-[#ff9800] transition"
        >
          <MessageCircle className="mr-2" />
          Chats
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center text-white hover:text-[#ff9800] transition"
        >
          <LogOut className="mr-2" />
          Logout
        </button>
      </div>
    </nav>
  );
}
