// import { useMemo, useState } from "react";
// import {
//   Plus,
//   Pencil,
//   Trash,
//   Package,
//   Shirt,
//   Scissors,
//   CheckCircle,
//   Truck,
//   User,
//   Layers,
//   X,
// } from "lucide-react";

// /* ====================== UI PRIMITIVES (same file) ====================== */
// function Card({ children }) {
//   return <div className="bg-white rounded-xl shadow-md">{children}</div>;
// }
// function CardContent({ children }) {
//   return <div className="p-4">{children}</div>;
// }
// function Button({ children, variant = "default", size = "md", className = "", ...props }) {
//   const base = "flex items-center justify-center rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
//   const sizes = { md: "px-4 py-2 text-sm", icon: "p-2" };
//   const variants = {
//     default: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
//     ghost: "bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-300",
//     outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
//     destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
//   };
//   return (
//     <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// }
// function Input({ className = "", ...props }) {
//   return (
//     <input
//       className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none ${className}`}
//       {...props}
//     />
//   );
// }
// function Select({ className = "", ...props }) {
//   return (
//     <select
//       className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none ${className}`}
//       {...props}
//     />
//   );
// }

// /* ====================== MOCK DATA ====================== */
// const INITIAL_ORDERS = [
//   { id: 101, customer: "Ali Khan", status: "New", style: "Kurta", measurements: { chest: 40, length: 42, shoulder: 18, sleeves: 24 }, notes: "Light fitting." },
//   { id: 102, customer: "Sara Ahmed", status: "Cutting", style: "Shalwar Kameez", measurements: { chest: 36, length: 40, shoulder: 16, sleeves: 22 }, notes: "Soft fabric." },
//   { id: 103, customer: "Bilal Hussain", status: "Stitching", style: "Coat", measurements: { chest: 42, length: 44, shoulder: 19, sleeves: 25 }, notes: "Winter wear." },
//   { id: 104, customer: "Hina Raza", status: "QC", style: "Maxi", measurements: { chest: 34, length: 52, shoulder: 14.5, sleeves: 0 }, notes: "No sleeves." },
//   { id: 105, customer: "Ahmed Ali", status: "Ready", style: "Waistcoat", measurements: { chest: 40, length: 25, shoulder: 17, sleeves: 0 }, notes: "Pickup tomorrow." },
//   { id: 106, customer: "Noor Fatima", status: "Shipped", style: "Abaya", measurements: { chest: 38, length: 54, shoulder: 15.5, sleeves: 23 }, notes: "Courier TCS." },
//   { id: 107, customer: "Usman Tariq", status: "Delivered", style: "Sherwani", measurements: { chest: 41, length: 45, shoulder: 18.5, sleeves: 25 }, notes: "Delivered 2 days ago." },
// ];

// const INITIAL_FABRICS = [
//   { id: 1, name: "Cotton", color: "White" },
//   { id: 2, name: "Silk", color: "Black" },
//   { id: 3, name: "Lawn", color: "Blue" },
// ];

// const ALL_STATUSES = ["New", "Cutting", "Stitching", "QC", "Ready", "Shipped", "Delivered"];

// /* ====================== DASHBOARD (single file) ====================== */
// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState("orders"); // "orders" | "fabrics"
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // Orders state + filters
//   const [orders, setOrders] = useState(INITIAL_ORDERS);
//   const [query, setQuery] = useState("");
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [selectedOrder, setSelectedOrder] = useState(null); // for detail drawer

//   // Fabrics CRUD state
//   const [fabrics, setFabrics] = useState(INITIAL_FABRICS);
//   const [fabricForm, setFabricForm] = useState({ id: null, name: "", color: "" });
//   const [isEditingFabric, setIsEditingFabric] = useState(false);

//   // Status badges/icons
//   const statusIcons = {
//     New: <Package className="w-4 h-4 mr-1" />,
//     Cutting: <Scissors className="w-4 h-4 mr-1" />,
//     Stitching: <Shirt className="w-4 h-4 mr-1" />,
//     QC: <CheckCircle className="w-4 h-4 mr-1 text-yellow-500" />,
//     Ready: <Layers className="w-4 h-4 mr-1" />,
//     Shipped: <Truck className="w-4 h-4 mr-1" />,
//     Delivered: <CheckCircle className="w-4 h-4 mr-1 text-green-600" />,
//   };
//   const statusStyles = {
//     New: "bg-indigo-100 text-indigo-700",
//     Cutting: "bg-orange-100 text-orange-700",
//     Stitching: "bg-pink-100 text-pink-700",
//     QC: "bg-yellow-100 text-yellow-800",
//     Ready: "bg-sky-100 text-sky-700",
//     Shipped: "bg-violet-100 text-violet-700",
//     Delivered: "bg-green-100 text-green-700",
//     All: "bg-gray-100 text-gray-700",
//   };
//   const statuses = ["All", ...ALL_STATUSES];

//   /* ------------------ Derived: filtered orders + stats ------------------ */
//   const filteredOrders = useMemo(() => {
//     const q = query.trim().toLowerCase();
//     return orders.filter((o) => {
//       const matchesQuery =
//         !q ||
//         o.customer.toLowerCase().includes(q) ||
//         o.style.toLowerCase().includes(q) ||
//         String(o.id).includes(q);
//       const matchesStatus = filterStatus === "All" || o.status === filterStatus;
//       return matchesQuery && matchesStatus;
//     });
//   }, [orders, query, filterStatus]);

//   const stats = {
//     total: orders.length,
//     inProgress: orders.filter((o) => ["Cutting", "Stitching", "QC"].includes(o.status)).length,
//     ready: orders.filter((o) => o.status === "Ready").length,
//   };

//   /* ------------------ Fabrics CRUD Handlers ------------------ */
//   function resetFabricForm() {
//     setFabricForm({ id: null, name: "", color: "" });
//     setIsEditingFabric(false);
//   }
//   function handleFabricSubmit(e) {
//     e.preventDefault();
//     const name = fabricForm.name.trim();
//     const color = fabricForm.color.trim();
//     if (!name || !color) return;

//     if (isEditingFabric && fabricForm.id != null) {
//       setFabrics((prev) => prev.map((f) => (f.id === fabricForm.id ? { ...f, name, color } : f)));
//     } else {
//       const nextId = fabrics.length ? Math.max(...fabrics.map((f) => f.id)) + 1 : 1;
//       setFabrics((prev) => [...prev, { id: nextId, name, color }]);
//     }
//     resetFabricForm();
//   }
//   function handleFabricEdit(fabric) {
//     setFabricForm(fabric);
//     setIsEditingFabric(true);
//   }
//   function handleFabricDelete(id) {
//     setFabrics((prev) => prev.filter((f) => f.id !== id));
//     if (isEditingFabric && fabricForm.id === id) resetFabricForm();
//   }

//   /* ------------------ UI ------------------ */
//   return (
//     <div className="min-h-screen flex bg-gray-50 text-gray-800">
//       {/* Backdrop for mobile drawer */}
//       {sidebarOpen && (
//         <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed lg:static inset-y-0 left-0 w-72 bg-white shadow-lg p-6 z-50 transform transition-transform
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
//       >
//         <div className="mb-8">
//           <h1 className="text-2xl font-extrabold tracking-tight">Dream Tailors</h1>
//           <p className="text-sm text-gray-500 mt-1">Admin dashboard</p>
//         </div>

//         <nav className="flex flex-col space-y-2">
//           <Button
//             variant={activeTab === "orders" ? "default" : "ghost"}
//             className="justify-start"
//             onClick={() => {
//               setActiveTab("orders");
//               setSidebarOpen(false);
//             }}
//           >
//             <Package className="w-4 h-4 mr-2" /> Orders
//           </Button>
//           <Button
//             variant={activeTab === "fabrics" ? "default" : "ghost"}
//             className="justify-start"
//             onClick={() => {
//               setActiveTab("fabrics");
//               setSidebarOpen(false);
//             }}
//           >
//             <Layers className="w-4 h-4 mr-2" /> Fabrics & Styles
//           </Button>
//         </nav>
//       </aside>

//       {/* Main */}
//       <main className="flex-1 p-6">
//         {/* Mobile toggle */}
//         <div className="flex items-center justify-between lg:hidden mb-4">
//           <Button onClick={() => setSidebarOpen(true)} className="gap-2">
//             ☰ Menu
//           </Button>
//           <div className="text-sm text-gray-500">Dream Tailors</div>
//         </div>

//         {/* Header + Search */}
//         <header className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//           <div>
//             <h2 className="text-2xl font-semibold">Overview</h2>
//             <p className="text-sm text-gray-500">Recent activity & inventory</p>
//           </div>
//           {activeTab === "orders" && (
//             <div className="w-full md:w-auto flex gap-3">
//               <div className="flex items-center bg-white rounded-lg shadow-sm px-3 py-2 w-full md:w-80">
//                 <Input
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search by order #, customer, style"
//                   className="border-0 focus:ring-0"
//                 />
//               </div>
//               <Button
//                 variant="ghost"
//                 onClick={() => {
//                   setQuery("");
//                   setFilterStatus("All");
//                 }}
//               >
//                 Reset
//               </Button>
//             </div>
//           )}
//         </header>

//         {/* Stats */}
//         <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//           <Card>
//             <CardContent>
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-gray-500">Total Orders</p>
//                   <p className="text-2xl font-bold">{stats.total}</p>
//                 </div>
//                 <div className="bg-gradient-to-tr from-indigo-500 to-indigo-400 text-white rounded-lg p-3">
//                   <Package className="w-5 h-5" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent>
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-gray-500">In Progress</p>
//                   <p className="text-2xl font-bold">{stats.inProgress}</p>
//                 </div>
//                 <div className="bg-gradient-to-tr from-orange-400 to-pink-400 text-white rounded-lg p-3">
//                   <Scissors className="w-5 h-5" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent>
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-gray-500">Ready</p>
//                   <p className="text-2xl font-bold">{stats.ready}</p>
//                 </div>
//                 <div className="bg-gradient-to-tr from-green-400 to-emerald-400 text-white rounded-lg p-3">
//                   <CheckCircle className="w-5 h-5" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </section>

//         {/* ORDERS TAB */}
//         {activeTab === "orders" && (
//           <section>
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold flex items-center">
//                 <Package className="w-5 h-5 mr-2" /> Orders
//               </h3>

//               {/* Status Filters */}
//               <div className="flex items-center gap-2 overflow-x-auto">
//                 {statuses.map((s) => (
//                   <button
//                     key={s}
//                     onClick={() => setFilterStatus(s)}
//                     className={`text-sm px-3 py-1 rounded-full border whitespace-nowrap ${
//                       filterStatus === s
//                         ? "bg-indigo-600 text-white border-indigo-600"
//                         : "bg-white text-gray-700"
//                     }`}
//                     title={`Filter by ${s}`}
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Orders Grid */}
//             <div className="grid gap-4 md:grid-cols-2">
//               {filteredOrders.map((order) => (
//                 <Card key={order.id}>
//                   <CardContent>
//                     <div className="flex justify-between items-start mb-3">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
//                           <User className="w-4 h-4" />
//                         </div>
//                         <div>
//                           <div className="font-semibold">
//                             #{order.id} — {order.customer}
//                           </div>
//                           <div className="text-sm text-gray-500">{order.style}</div>
//                         </div>
//                       </div>
//                       <div
//                         className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                           statusStyles[order.status]
//                         }`}
//                       >
//                         {statusIcons[order.status]}
//                         {order.status}
//                       </div>
//                     </div>

//                     <div className="text-sm text-gray-600 mb-3">
//                       Chest {order.measurements.chest}" • Length {order.measurements.length}"
//                     </div>

//                     <div className="flex items-center justify-between">
//                       <div className="text-xs text-gray-400">Updated recently</div>
//                       <div className="flex gap-2">
//                         <Button
//                           variant="outline"
//                           size="md"
//                           onClick={() => setSelectedOrder(order)}
//                         >
//                           View Details
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}

//               {filteredOrders.length === 0 && (
//                 <Card>
//                   <CardContent>
//                     <div className="text-center py-8">
//                       <p className="text-gray-500">No orders match your search or filter.</p>
//                       <Button
//                         className="mt-4"
//                         onClick={() => {
//                           setQuery("");
//                           setFilterStatus("All");
//                         }}
//                       >
//                         Show all orders
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               )}
//             </div>
//           </section>
//         )}

//         {/* FABRICS TAB (CRUD) */}
//         {activeTab === "fabrics" && (
//           <section>
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
//               <h3 className="text-lg font-semibold flex items-center">
//                 <Layers className="w-5 h-5 mr-2" /> Fabrics & Styles
//               </h3>

//               {/* Fabric Form */}
//               <form
//                 onSubmit={handleFabricSubmit}
//                 className="bg-white rounded-xl shadow-sm p-3 flex flex-col sm:flex-row gap-2 w-full md:w-auto"
//               >
//                 <Input
//                   placeholder="Fabric name (e.g., Cotton)"
//                   value={fabricForm.name}
//                   onChange={(e) => setFabricForm((f) => ({ ...f, name: e.target.value }))}
//                   required
//                 />
//                 <Input
//                   placeholder="Color (e.g., Blue)"
//                   value={fabricForm.color}
//                   onChange={(e) => setFabricForm((f) => ({ ...f, color: e.target.value }))}
//                   required
//                 />
//                 <Button type="submit" className="gap-2">
//                   <Plus className="w-4 h-4" />
//                   {isEditingFabric ? "Update" : "Add"}
//                 </Button>
//                 {isEditingFabric && (
//                   <Button type="button" variant="ghost" onClick={resetFabricForm}>
//                     Cancel
//                   </Button>
//                 )}
//               </form>
//             </div>

//             <div className="bg-white shadow-sm rounded-lg overflow-hidden">
//               <table className="min-w-full text-sm">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Name</th>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Color</th>
//                     <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {fabrics.map((fabric) => (
//                     <tr key={fabric.id} className="border-t hover:bg-gray-50">
//                       <td className="px-4 py-3">{fabric.name}</td>
//                       <td className="px-4 py-3">
//                         <div className="flex items-center gap-2">
//                           <span
//                             className="inline-block w-4 h-4 rounded-full border"
//                             style={{ background: fabric.color.toLowerCase() }}
//                             title={fabric.color}
//                           />
//                           <span>{fabric.color}</span>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="flex justify-end gap-2">
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             title="Edit"
//                             onClick={() => handleFabricEdit(fabric)}
//                           >
//                             <Pencil className="w-4 h-4" />
//                           </Button>
//                           <Button
//                             variant="destructive"
//                             size="icon"
//                             title="Delete"
//                             onClick={() => handleFabricDelete(fabric.id)}
//                           >
//                             <Trash className="w-4 h-4" />
//                           </Button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                   {fabrics.length === 0 && (
//                     <tr>
//                       <td colSpan={3} className="px-4 py-6 text-center text-gray-500">
//                         No fabrics yet. Add one using the form above.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </section>
//         )}
//       </main>

//       {/* ============== ORDER DETAIL DRAWER (Measurements + Style) ============== */}
//       {selectedOrder && (
//         <div className="fixed inset-0 z-[60] flex">
//           <div className="flex-1 bg-black/40" onClick={() => setSelectedOrder(null)} />
//           <div className="w-full sm:w-[480px] bg-white h-full shadow-2xl p-6 overflow-y-auto">
//             <div className="flex items-start justify-between mb-4">
//               <div>
//                 <h4 className="text-xl font-semibold">
//                   Order #{selectedOrder.id} — {selectedOrder.customer}
//                 </h4>
//                 <div className="mt-1 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100">
//                   <span className="mr-2">{statusIcons[selectedOrder.status]}</span>
//                   {selectedOrder.status}
//                 </div>
//               </div>
//               <Button variant="ghost" size="icon" onClick={() => setSelectedOrder(null)}>
//                 <X className="w-5 h-5" />
//               </Button>
//             </div>

//             <div className="space-y-6">
//               <section>
//                 <h5 className="text-sm font-medium text-gray-500 mb-2">Style</h5>
//                 <Card>
//                   <CardContent>
//                     <div className="flex items-center gap-3">
//                       <Shirt className="w-5 h-5 text-gray-600" />
//                       <div className="text-gray-800">{selectedOrder.style}</div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </section>

//               <section>
//                 <h5 className="text-sm font-medium text-gray-500 mb-2">Measurements</h5>
//                 <Card>
//                   <CardContent>
//                     <ul className="grid grid-cols-2 gap-3 text-sm">
//                       <li className="flex justify-between"><span>Chest</span><span>{selectedOrder.measurements.chest}"</span></li>
//                       <li className="flex justify-between"><span>Length</span><span>{selectedOrder.measurements.length}"</span></li>
//                       <li className="flex justify-between"><span>Shoulder</span><span>{selectedOrder.measurements.shoulder}"</span></li>
//                       <li className="flex justify-between"><span>Sleeves</span><span>{selectedOrder.measurements.sleeves}"</span></li>
//                     </ul>
//                   </CardContent>
//                 </Card>
//               </section>

//               <section>
//                 <h5 className="text-sm font-medium text-gray-500 mb-2">Notes</h5>
//                 <Card>
//                   <CardContent>
//                     <p className="text-sm text-gray-700">{selectedOrder.notes || "—"}</p>
//                   </CardContent>
//                 </Card>
//               </section>

//               <section>
//                 <h5 className="text-sm font-medium text-gray-500 mb-2">Update Status</h5>
//                 <div className="flex gap-2 flex-wrap">
//                   {ALL_STATUSES.map((s) => (
//                     <Button
//                       key={s}
//                       variant={selectedOrder.status === s ? "default" : "outline"}
//                       onClick={() =>
//                         setSelectedOrder((o) => ({ ...o, status: s })) ||
//                         setOrders((prev) => prev.map((p) => (p.id === selectedOrder.id ? { ...p, status: s } : p)))
//                       }
//                     >
//                       {s}
//                     </Button>
//                   ))}
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header"; 
import Orders from "../Components/OrderList";
import Fabrics from "../Components/FabricTable";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
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
  );
}
