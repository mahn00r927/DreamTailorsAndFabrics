import { BrowserRouter, Routes, Route } from "react-router-dom";
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
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <BrowserRouter>
      <Navbar />
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
        <Route path="/account" element={<AccountPage/>}></Route>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/form' element={<MeasurementForm/>}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
