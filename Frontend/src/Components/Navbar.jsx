// import { useState } from "react";
// import { Menu, X, ShoppingCart, User, MessageCircle } from "lucide-react";
// import { AuthSidebar } from "./AuthSidebar";
// import { Link } from "react-router-dom";
// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   return (
//     <nav className="relative flex flex-col px-6 py-6 bg-gray-600 md:py-10 md:h-[160px] w-full font-[Montserrat]">
//       <div className="flex w-full items-center justify-between md:block">
//         <h1 className="text-white font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
//           DREAM TAILOR & Fabrics
//         </h1>

//         <button
//           className="text-white md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>
//       <ul
//         className={`
//           flex list-none text-lg transition-all duration-300 ease-in-out
//           ${
//             isOpen
//               ? "flex flex-col mt-6 gap-4"
//               : "hidden md:flex md:mt-10 md:justify-center gap-8"
//           }
//         `}
//       >
//         {[
//           { name: "HOME", url: "/" },
//           { name: "ABOUT", url: "/about" },
//           { name: "TAILORING", url: "/tailoring" },
//           { name: "CONTACT", url: "/contact" },
//           { name: "FAQ", url: "/faq" },
//         ].map((link) => (
//           <li key={link.name}>
//             <a
//               href={link.url}
//               className="text-white no-underline hover:text-[#ff9800]"
//             >
//               {link.name}
//             </a>
//           </li>
//         ))}

//         {isOpen && (
//           <div className="flex flex-row mt-4 space-x-4 md:hidden">
//             <button
//               aria-label="Account"
//               className="p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer"
//               onClick={() => setIsSidebarOpen(true)}
//             >
//               <User className="h-6 w-6 text-white" />
//             </button>
//             <button
//               aria-label="Shopping Cart"
//               className="p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer"
//             >
//               <ShoppingCart className="h-6 w-6 text-white" />
//             </button>
//             <button
//               aria-label="Chat"
//               className="p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer"
//               onClick={() => alert("Open chat with admin")} // yahan ap apna chat system integrate kar sakti ho
//             >
//               <MessageCircle className="h-6 w-6 text-white" />
//             </button>
//           </div>
//         )}
//       </ul>
//       <div className="absolute bottom-4 right-8 hidden md:flex flex-row items-center space-x-4">
//         <button
//           aria-label="Account"
//           className="p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer"
//           onClick={() => setIsSidebarOpen(true)}
//         >
//           <User className="h-6 w-6 text-white" />
//         </button>
//         <button
//           aria-label="Shopping Cart"
//           className="relative p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer"
//         >
//           <Link to="/cart">
//             <ShoppingCart className="h-6 w-6 text-white" />
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//               3
//             </span>
//           </Link>
//         </button>
//         <button
//           aria-label="Chat"
//           className="p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer"
//           onClick={() => alert("Open chat with admin")}
//         >
//           <MessageCircle className="h-6 w-6 text-white" />
//         </button>
//       </div>
//       <AuthSidebar
//         isOpen={isSidebarOpen}
//         onClose={() => setIsSidebarOpen(false)}
//       />
//     </nav>
//   );
// }
import { useState } from "react";
import { Menu, X, ShoppingCart, User, MessageCircle } from "lucide-react";
import { AuthSidebar } from "./AuthSidebar";
import { Link } from "react-router-dom";
import UserChat from "./UserChat";   // ✅ Chat component import

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showChat, setShowChat] = useState(false); // ✅ state for chat

  const toggleChat = () => {
    setShowChat((prev) => !prev);
  };

  return (
    <>
      <nav className="relative flex flex-col px-6 py-6 bg-gray-600 md:py-10 md:h-[160px] w-full font-[Montserrat]">
        <div className="flex w-full items-center justify-between md:block">
          <h1 className="text-white font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
            DREAM TAILOR & Fabrics
          </h1>

          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Links */}
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
          {[
            { name: "HOME", url: "/" },
            { name: "ABOUT", url: "/about" },
            { name: "TAILORING", url: "/tailoring" },
            { name: "CONTACT", url: "/contact" },
            { name: "FAQ", url: "/faq" },
          ].map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                className="text-white no-underline hover:text-[#ff9800]"
              >
                {link.name}
              </a>
            </li>
          ))}

          {isOpen && (
            <div className="flex flex-row mt-4 space-x-4 md:hidden">
              <button
                aria-label="Account"
                className="p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer"
                onClick={() => setIsSidebarOpen(true)}
              >
                <User className="h-6 w-6 text-white" />
              </button>
              <button
                aria-label="Shopping Cart"
                className="p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer"
              >
                <ShoppingCart className="h-6 w-6 text-white" />
              </button>
              <button
                aria-label="Chat"
                className="p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer"
                onClick={toggleChat}  // ✅ Toggle chat popup
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </button>
            </div>
          )}
        </ul>

        {/* Desktop Right Side Buttons */}
        <div className="absolute bottom-4 right-8 hidden md:flex flex-row items-center space-x-4">
          <button
            aria-label="Account"
            className="p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          >
            <User className="h-6 w-6 text-white" />
          </button>
          <button
            aria-label="Shopping Cart"
            className="relative p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer"
          >
            <Link to="/cart">
              <ShoppingCart className="h-6 w-6 text-white" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </Link>
          </button>
          <button
            aria-label="Chat"
            className="p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer"
            onClick={toggleChat}   // ✅ Toggle chat popup
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </button>
        </div>
        <AuthSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </nav>

      {/* ✅ Chat Box */}
      {showChat && <UserChat />}
    </>
  );
}
