import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { HeroSection } from "./Components/HeroSection";
import { FabricSection } from "./Components/FabricSection";
import { Footer } from "./Components/Footer";
import HowItWorks from "./Components/HowItWorks";
import { FAQ } from "./Pages/FAQ";
import { Contact } from "./Pages/Contact";
import CallToAction from "./Components/CallToAction";
import About from "./Pages/About";
import { AuthSidebar } from "./Components/AuthSidebar";
import { useState } from "react";
import TailoringPage from "./Pages/Tailoring";
import AccountPage from "./Pages/AccountPage";
import CartPage from "./Components/Cart";
import Checkout from "./Pages/Checkout";
import MeasurementForm from "./Components/MeasurementForm";
import Dashboard from "./Admin/Pages/Dashboard";

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Check if current route starts with "/dashboard"
  const isAdminRoute = location.pathname.startsWith("/dashboard");

  return (
    <>
      {/* Show Navbar only if not admin route */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FabricSection />
              <HowItWorks />
              <CallToAction onOpenSidebar={() => setIsSidebarOpen(true)} />
              <AuthSidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
              />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tailoring" element={<TailoringPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/form" element={<MeasurementForm />} />

        {/* Admin Route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* Show Footer only if not admin route */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
