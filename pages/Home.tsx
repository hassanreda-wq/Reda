import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import { ArrowLeft, Star, Coffee, Clock, Smile } from 'lucide-react';

const Home: React.FC = () => {
  // Select first 3 items as featured
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white overflow-hidden min-h-[650px] flex items-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1600&auto=format&fit=crop" 
            alt="Coffee Background" 
            className="w-full h-full object-cover opacity-30"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Text Content */}
          <div className="text-center md:text-right space-y-8 animate-fade-in delay-100">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-400 font-medium text-sm">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>أفضل قهوة في المنصورة وبلقاس</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              <span className="text-white">طعم يظبط</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">مزاجك العالي</span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-300 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
              استمتع بأفضل مذاق للقهوة في كل صباح. توليفة "بن العمدة" الخاصة تمنحك الطعم الأصيل والرائحة التي لا تقاوم.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <Link 
                to="/products" 
                className="group inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-lg font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl shadow-amber-900/20"
              >
                <span>تصفح القائمة</span>
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </Link>
              <button 
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white text-lg font-bold px-8 py-4 rounded-xl transition-all border border-white/10 hover:border-white/20"
                onClick={() => {
                  const element = document.getElementById('features');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>اكتشف المزيد</span>
              </button>
            </div>
          </div>

          {/* Image Content (Packshot style) */}
          <div className="relative flex justify-center items-center animate-fade-in delay-200 hidden md:flex">
            <div className="absolute inset-0 bg-amber-600/20 blur-[120px] rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop" 
              alt="بن العمدة - باكت وكوب" 
              className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 rotate-[-5deg] hover:rotate-0"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-10 right-10 bg-white/95 backdrop-blur px-6 py-4 rounded-2xl shadow-2xl z-20 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="text-center">
                <span className="block text-stone-500 text-xs font-bold mb-1">الأكثر مبيعاً</span>
                <span className="block text-amber-700 text-2xl font-extrabold">95 ج.م</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Banner */}
      <section id="features" className="relative -mt-10 z-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-white rounded-2xl shadow-xl shadow-stone-200/50 hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
               <Coffee size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">جودة عالية</h3>
            <p className="text-stone-500 leading-relaxed">نستخدم أفضل أنواع البن المستورد من المزارع العالمية مباشرة إليك.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-xl shadow-stone-200/50 hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
               <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">تحضير طازج</h3>
            <p className="text-stone-500 leading-relaxed">نضمن لك تحميصاً وطحناً طازجاً للحفاظ على النكهة القوية.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-xl shadow-stone-200/50 hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
               <Smile size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">خدمة مميزة</h3>
            <p className="text-stone-500 leading-relaxed">فريقنا مستعد دائماً لخدمتكم وتوصيل طلباتكم بكل حب.</p>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-amber-600 font-bold text-sm tracking-wider uppercase mb-2 block">مختاراتنا لك</span>
            <h2 className="text-4xl font-extrabold text-stone-800 mb-2">منتجاتنا المميزة</h2>
            <div className="h-1.5 w-24 bg-amber-500 rounded-full"></div>
          </div>
          <Link to="/products" className="group flex text-stone-600 font-bold hover:text-amber-700 items-center gap-2 transition bg-white border border-stone-200 px-5 py-2.5 rounded-full hover:shadow-md">
             عرض كل المنتجات <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;