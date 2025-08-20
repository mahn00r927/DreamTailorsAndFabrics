import { useState } from "react";
import { User, Lock, ShoppingBag, Settings } from "lucide-react";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4">
      {/* Profile Header */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-800"
        />
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-800">Mahnoor</h2>
          <p className="text-gray-500">mahnoor@example.com</p>
        </div>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition">
          Edit Profile
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="w-full max-w-4xl mt-6 flex flex-wrap justify-center sm:justify-start gap-4">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
            activeTab === "overview"
              ? "bg-orange-500 text-white"
              : "bg-white shadow hover:bg-gray-100"
          }`}
        >
          <User size={18} /> Overview
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
            activeTab === "orders"
              ? "bg-orange-500 text-white"
              : "bg-white shadow hover:bg-gray-100"
          }`}
        >
          <ShoppingBag size={18} /> Orders
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
            activeTab === "settings"
              ? "bg-orange-500 text-white"
              : "bg-white shadow hover:bg-gray-100"
          }`}
        >
          <Settings size={18} /> Settings
        </button>
        <button
          onClick={() => setActiveTab("security")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
            activeTab === "security"
              ? "bg-orange-500 text-white"
              : "bg-white shadow hover:bg-gray-100"
          }`}
        >
          <Lock size={18} /> Security
        </button>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl mt-6 bg-white shadow-md rounded-2xl p-6">
        {activeTab === "overview" && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Account Overview
            </h3>
            <p className="text-gray-600">
              Welcome back, Here you can check your account details, order
              history, and update your settings.
            </p>
          </div>
        )}

        {activeTab === "orders" && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              My Orders
            </h3>
            <ul className="space-y-3">
              <li className="p-4 border rounded-md hover:shadow">
                Order #12345 – Status:{" "}
                <span className="text-orange-600">Shipped</span>
              </li>
              <li className="p-4 border rounded-md hover:shadow">
                Order #12346 – Status:{" "}
                <span className="text-gray-600">Processing</span>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Account Settings
            </h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <input
    type="text"
    placeholder="Full Name"
    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
  />
  <input
    type="email"
    placeholder="Email Address"
    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
  />
  <input
    type="tel"
    placeholder="Phone Number"
    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
  />
  <textarea
    placeholder="Address"
    rows="3"
    className="w-full p-3 border rounded-md resize-none focus:ring-2 focus:ring-orange-400 focus:outline-none md:col-span-2"
  />
  {/* <input
    type="password"
    placeholder=" Password"
    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
  /> */}
  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-md w-full md:col-span-2">
    Save Changes
  </button>
</form>

          </div>
        )}

        {activeTab === "security" && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Security Settings
            </h3>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
              Change Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
