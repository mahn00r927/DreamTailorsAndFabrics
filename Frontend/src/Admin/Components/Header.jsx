export default function Header() {
  return (
    <header className="bg-white shadow-md px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
      {/* Left: logo + title */}
      <div className="flex items-center space-x-3">
        <div className="hidden sm:block">
          <h1 className="text-lg md:text-2xl font-semibold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back, Admin</p>
        </div>
      </div>

      {/* Center: search (visible on md+) */}
      <div className="flex-1 mx-4">
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 max-w-xl mx-auto">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
          </svg>
          <input
            className="bg-transparent outline-none ml-3 w-full text-sm text-gray-700"
            placeholder="Search orders, products or customers"
            aria-label="Search"
          />
          <button className="text-sm text-gray-800 font-medium ml-2 hidden lg:inline">Search</button>
        </div>
      </div>
    </header>
  );
}
