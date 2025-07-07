import { useState } from 'react';
import { Bus } from 'lucide-react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow-sm border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-9 lg:px-12">
        <div className="flex justify-between items-center py-6">
          {/* Logo personnalisé avec icône Bus */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-cyan-700 rounded-lg flex items-center justify-center">
                <Bus className="w-5 h-5 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">SAFAR</span>
            </a>
          </div>

          {/* Navigation (PC seulement) */}
          <nav className="hidden md:flex items-center space-x-9">
            <a href="#" className="text-gray-600 hover:text-cyan-700 text-sm font-medium transition-colors">À Propos</a>
            <a href="#" className="text-gray-600 hover:text-cyan-700 text-sm font-medium transition-colors">Services</a>
            <a href="#" className="text-gray-600 hover:text-cyan-700 text-sm font-medium transition-colors">Solutions</a>
            <a href="#" className="text-gray-600 hover:text-cyan-700 text-sm font-medium transition-colors">Contact</a>
          </nav>

          {/* Actions utilisateur + menu mobile */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-cyan-700 p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
              </svg>
            </button>

            <button className="text-gray-600 hover:text-cyan-700 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A9.001 9.001 0 0112 15a9.001 9.001 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            {/* Burger menu (mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-cyan-700 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-3">
            <a href="#" className="block text-gray-700 hover:text-cyan-700 font-medium">À Propos</a>
            <a href="#" className="block text-gray-700 hover:text-cyan-700 font-medium">Services</a>
            <a href="#" className="block text-gray-700 hover:text-cyan-700 font-medium">Solutions</a>
            <a href="#" className="block text-gray-700 hover:text-cyan-700 font-medium">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
