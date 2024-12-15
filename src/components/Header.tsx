import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Truck, Menu, User, X, Package } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'expedier', icon: Package, label: 'Expédier', path: '/expedier' },
    { id: 'reserver', icon: Package, label: 'Réserver', path: '/reserver' },
    { id: 'devenir-freter', icon: Package, label: 'Devenir Freter', path: '/devenir-freter' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-white text-gray-900 shadow-lg' 
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Truck className={`h-8 w-8 ${isScrolled || location.pathname !== '/' ? 'text-indigo-600' : 'text-white'}`} />
            <span className="ml-2 text-2xl font-bold">FRETLA</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isScrolled || location.pathname !== '/'
                    ? 'hover:bg-indigo-50 text-gray-700 hover:text-indigo-600'
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled || location.pathname !== '/'
                  ? 'hover:bg-indigo-50 text-gray-700'
                  : 'hover:bg-white/10 text-white'
              }`}
            >
              <User className="h-6 w-6" />
            </button>
            <button 
              className="md:hidden p-2 rounded-full hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="px-8 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-4 w-full text-white py-4 text-xl"
              >
                <item.icon className="h-6 w-6" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}