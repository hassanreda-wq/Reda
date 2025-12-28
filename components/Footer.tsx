import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <div className="flex items-center gap-2 text-amber-500 mb-4">
            <Coffee size={28} />
            <span className="text-xl font-bold text-white">ALOMDA COFFEE</span>
          </div>
          <p className="text-stone-400 leading-relaxed mb-4">
            نقدم لكم أجود أنواع بن العمدة الفاخر. خبرة عريقة في تحميص وتقديم القهوة لتناسب جميع الأذواق في المنصورة وبلقاس.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/1A85xWSKyd/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/reda_74h?igsh=bXdteWhzbjI4am5i" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">روابط سريعة</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-amber-500 transition">الرئيسية</Link></li>
            <li><Link to="/products" className="hover:text-amber-500 transition">قائمة المنتجات</Link></li>
            <li><Link to="/about" className="hover:text-amber-500 transition">من نحن</Link></li>
            <li><Link to="/contact" className="hover:text-amber-500 transition">تواصل معنا</Link></li>
            <li><Link to="/register" className="hover:text-amber-500 transition">تسجيل حساب</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">تواصل معنا</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-amber-500 shrink-0" />
              <span>المنصورة - بلقاس - بجوار المحكمة</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-amber-500 shrink-0" />
              <span dir="ltr">01064315604</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-amber-500 shrink-0" />
              <span>reda2hassan55@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-800 mt-10 pt-6 text-center text-sm text-stone-500">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لـ ALOMDA COFFEE.
      </div>
    </footer>
  );
};

export default Footer;