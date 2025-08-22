export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-64 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gray-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow">
            {/* Sewing needle icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.71 2.29a1 1 0 0 0-1.41 0l-7.09 7.09-6.36 6.36a2 2 0 0 0-.52 1.02L5 21l3.24-.43a2 2 0 0 0 1.02-.52l6.36-6.36 7.09-7.09a1 1 0 0 0 0-1.41zM7.5 18.5l-1.25.17.17-1.25L14 8.84l1.08 1.08L7.5 18.5z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-tight">Dream Tailors</h2>
            <p className="text-xs text-gray-500">Admin dashboard</p>
          </div>
        </div>

        <nav aria-label="Main navigation" className="space-y-2">
          <button
            onClick={() => setActiveTab("orders")}
            aria-current={activeTab === "orders" ? "page" : undefined}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
              activeTab === "orders"
                ? "bg-gray-800 text-white shadow"
                : "text-gray-700 hover:bg-gray-50"
            } focus:outline-none focus:ring-2 focus:ring-indigo-200`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${activeTab === "orders" ? "text-white" : "text-gray-800"}`} viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h18v2H3V3zm2 4h14l-1 12H6L5 7zm7 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
            </svg>
            <span className="flex-1 text-left">Orders</span>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${activeTab === "orders" ? "bg-white text-gray-800" : "bg-indigo-100 text-gray-800"}`}>
              12
            </span>
          </button>

          <button
            onClick={() => setActiveTab("fabrics")}
            aria-current={activeTab === "fabrics" ? "page" : undefined}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
              activeTab === "fabrics"
                ? "bg-gray-800 text-white shadow"
                : "text-gray-700 hover:bg-gray-50"
            } focus:outline-none focus:ring-2 focus:ring-indigo-200`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${activeTab === "fabrics" ? "text-white" : "text-gray-800"}`} viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 3v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V3h18zM3 21a2 2 0 0 0 2-2v-2h14v2a2 2 0 0 0 2 2H3z" />
            </svg>
            <span className="flex-1 text-left">Fabrics & Styles</span>
          </button>
        </nav>
      </div>
      {/* <div className="mt-6">
        <button
          onClick={() => setActiveTab("settings")}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm8.94 3a7.97 7.97 0 0 0-.11-1l2.07-1.6-2-3.46-2.45.98a8 8 0 0 0-1.73-.99L16 2h-4l-.62 2.93c-.61.22-1.2.51-1.73.99L6.2 5.94 4.2 9.4 6.27 11a7.97 7.97 0 0 0-.11 1c0 .34.04.67.11 1L4.2 14.6l2 3.46 2.45-.98c.53.48 1.12.77 1.73.99L12 22h4l.62-2.93c.61-.22 1.2-.51 1.73-.99l2.45.98 2-3.46-2.07-1.6c.07-.33.11-.66.11-1z" />
          </svg>
          <span>Settings</span>
        </button>
        <p className="text-xs text-gray-400 mt-4">Version 1.0.0</p>
      </div> */}
    </aside>
  );
}
