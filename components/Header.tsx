import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu, X, ShoppingBag, UserPlus } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-white shadow-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-amber-800 hover:text-amber-900 transition group">
          <div className="bg-amber-100 p-2 rounded-full group-hover:bg-amber-200 transition">
             <Coffee size={28} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-extrabold tracking-wider">ALOMDA<span className="text-amber-600">COFFEE</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            <Link 
              to="/" 
              className={`font-medium text-lg relative transition-colors hover:text-amber-700 ${
                isActive('/') ? 'text-amber-700 font-bold' : 'text-stone-600'
              }`}
            >
              الرئيسية
              {isActive('/') && <span className="absolute -bottom-2 right-0 w-full h-1 bg-amber-600 rounded-full"></span>}
            </Link>
            <Link 
              to="/products" 
              className={`font-medium text-lg relative transition-colors hover:text-amber-700 ${
                isActive('/products') ? 'text-amber-700 font-bold' : 'text-stone-600'
              }`}
            >
              المنتجات
              {isActive('/products') && <span className="absolute -bottom-2 right-0 w-full h-1 bg-amber-600 rounded-full"></span>}
            </Link>
            <Link 
              to="/about" 
              className={`font-medium text-lg relative transition-colors hover:text-amber-700 ${
                isActive('/about') ? 'text-amber-700 font-bold' : 'text-stone-600'
              }`}
            >
              من نحن
              {isActive('/about') && <span className="absolute -bottom-2 right-0 w-full h-1 bg-amber-600 rounded-full"></span>}
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium text-lg relative transition-colors hover:text-amber-700 ${
                isActive('/contact') ? 'text-amber-700 font-bold' : 'text-stone-600'
              }`}
            >
              تواصل معنا
              {isActive('/contact') && <span className="absolute -bottom-2 right-0 w-full h-1 bg-amber-600 rounded-full"></span>}
            </Link>
          </div>
          
          <div className="flex items-center gap-3 border-r border-stone-200 pr-6 mr-2">
            <Link 
              to="/register" 
              className={`flex items-center gap-1 font-medium transition-colors ${
                isActive('/register') ? 'text-amber-700 font-bold' : 'text-stone-500 hover:text-amber-700'
              }`}
            >
              <UserPlus size={18} />
              <span>تسجيل</span>
            </Link>
            
            <Link 
              to="/products" 
              className="group flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-full hover:bg-amber-600 transition-all duration-300 shadow-lg shadow-amber-900/10 ml-2"
            >
              <ShoppingBag size={18} className="group-hover:animate-bounce" />
              <span>تسوق الآن</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-stone-700 p-2 hover:bg-stone-100 rounded-lg transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-stone-100 absolute w-full left-0 shadow-xl animate-fade-in z-40">
          <div className="p-4 flex flex-col gap-2">
            <Link 
              to="/" 
              className={`block text-lg font-medium p-3 rounded-xl transition ${isActive('/') ? 'bg-amber-50 text-amber-700' : 'text-stone-700 hover:bg-stone-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link 
              to="/products" 
              className={`block text-lg font-medium p-3 rounded-xl transition ${isActive('/products') ? 'bg-amber-50 text-amber-700' : 'text-stone-700 hover:bg-stone-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              المنتجات
            </Link>
            <Link 
              to="/about" 
              className={`block text-lg font-medium p-3 rounded-xl transition ${isActive('/about') ? 'bg-amber-50 text-amber-700' : 'text-stone-700 hover:bg-stone-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              من نحن
            </Link>
            <Link 
              to="/contact" 
              className={`block text-lg font-medium p-3 rounded-xl transition ${isActive('/contact') ? 'bg-amber-50 text-amber-700' : 'text-stone-700 hover:bg-stone-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              تواصل معنا
            </Link>
            <hr className="border-stone-100 my-2" />
            <Link 
              to="/register" 
              className="flex items-center gap-2 text-lg font-medium text-stone-700 p-3 rounded-xl hover:bg-stone-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <UserPlus size={20} />
              تسجيل جديد
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;