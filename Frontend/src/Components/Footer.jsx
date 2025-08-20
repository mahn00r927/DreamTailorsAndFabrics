export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 w-full right-0">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">About Us</h2>
          <p className="text-sm leading-6">
            DreamTailors & Fabric is your one-stop destination for premium quality fabrics and tailored outfits. We believe in style with comfort.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">Shop</a></li>
            <li><a href="/about" className="hover:text-orange-400">About</a></li>
            <li><a href="/contact" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>
          <p className="text-sm">📍 Karachi, Pakistan</p>
          <p className="text-sm">📧 support@dreamtailors.com</p>
          <p className="text-sm">📞 03021206664 (WhatsApp Only)</p>

          <div className="flex space-x-4 mt-4">
            <a href="#"><i className="fab fa-facebook text-xl hover:text-orange-400"></i></a>
            <a href="#"><i className="fab fa-instagram text-xl hover:text-orange-400"></i></a>
            <a href="#"><i className="fab fa-twitter text-xl hover:text-orange-400"></i></a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} DreamTailors & Fabric. All rights reserved.
      </div>
    </footer>
  );
}
