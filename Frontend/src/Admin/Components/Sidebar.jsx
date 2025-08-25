import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white shadow">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28}  className="mb-150"/>}
        </button>
      </div>

      {/* Overlay for mobile (click outside to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-full md:h-auto bg-white shadow-lg rounded-r-lg md:rounded-lg p-6 flex flex-col justify-between
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0 md:w-64"}
          z-50
        `}
      >
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gray-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.71 2.29a1 1 0 0 0-1.41 0l-7.09 7.09-6.36 6.36a2 2 0 0 0-.52 1.02L5 21l3.24-.43a2 2 0 0 0 1.02-.52l6.36-6.36 7.09-7.09a1 1 0 0 0 0-1.41zM7.5 18.5l-1.25.17.17-1.25L14 8.84l1.08 1.08L7.5 18.5z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold leading-tight">Dream Tailors</h2>
              <p className="text-xs text-gray-500">Admin dashboard</p>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Main navigation" className="space-y-2">
            <button
              onClick={() => {
                setActiveTab("orders");
                setIsOpen(false);
              }}
              aria-current={activeTab === "orders" ? "page" : undefined}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                activeTab === "orders"
                  ? "bg-gray-800 text-white shadow"
                  : "text-gray-700 hover:bg-gray-50"
              } focus:outline-none focus:ring-2 focus:ring-indigo-200`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 ${
                  activeTab === "orders" ? "text-white" : "text-gray-800"
                }`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 3h18v2H3V3zm2 4h14l-1 12H6L5 7zm7 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>
              <span className="flex-1 text-left">Orders</span>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  activeTab === "orders"
                    ? "bg-white text-gray-800"
                    : "bg-indigo-100 text-gray-800"
                }`}
              >
                12
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab("fabrics");
                setIsOpen(false);
              }}
              aria-current={activeTab === "fabrics" ? "page" : undefined}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                activeTab === "fabrics"
                  ? "bg-gray-800 text-white shadow"
                  : "text-gray-700 hover:bg-gray-50"
              } focus:outline-none focus:ring-2 focus:ring-indigo-200`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 ${
                  activeTab === "fabrics" ? "text-white" : "text-gray-800"
                }`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 3v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V3h18zM3 21a2 2 0 0 0 2-2v-2h14v2a2 2 0 0 0 2 2H3z" />
              </svg>
              <span className="flex-1 text-left">Fabrics & Styles</span>
            </button>
          </nav>
        </div>
      </aside>
    </>
  );
}
