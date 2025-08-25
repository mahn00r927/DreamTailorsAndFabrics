import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Orders from "../Components/OrderList";
import Fabrics from "../Components/FabricTable";
import { AdminNavbar } from "../Components/AdminNavbar";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <>
      <AdminNavbar />
      <div className="flex h-screen bg-gray-100">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="p-6 overflow-auto">
            {activeTab === "orders" && <Orders />}
            {activeTab === "fabrics" && <Fabrics />}
          </main>
        </div>
      </div>
    </>
  );
}
