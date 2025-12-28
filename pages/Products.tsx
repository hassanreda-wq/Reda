import React, { useState, useMemo } from 'react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import { Search, Filter, Coffee } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('الكل');
  const [searchTerm, setSearchTerm] = useState('');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = products.map(p => p.category);
    return ['الكل', ...new Set(cats)];
  }, []);

  // Filter logic
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'الكل' || product.category === activeCategory;
    const matchesSearch = product.name.includes(searchTerm) || product.description.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-stone-800 mb-6">قائمة <span className="text-amber-700">القهوة</span></h1>
        <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
          اكتشف تشكيلتنا الواسعة من المشروبات والمأكولات، تم إعدادها بكل حب لتناسب ذائقتكم الرفيعة.
        </p>
      </div>

      {/* Filters & Search Bar Container */}
      <div className="bg-white rounded-3xl shadow-lg border border-stone-100 p-6 mb-12 sticky top-24 z-30 backdrop-blur-md bg-white/90">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 order-2 lg:order-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === cat 
                    ? 'bg-stone-800 text-white shadow-md' 
                    : 'bg-stone-100 text-stone-600 hover:bg-amber-100 hover:text-amber-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80 order-1 lg:order-2">
            <input
              type="text"
              placeholder="ابحث عن قهوتك..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-12 py-3.5 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:bg-white focus:border-amber-500 focus:ring-0 outline-none transition-all placeholder-stone-400 font-medium"
            />
            <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" />
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className="mb-6 text-stone-500 font-medium px-2 flex items-center gap-2">
        <Coffee size={18} />
        <span>تم العثور على {filteredProducts.length} منتج</span>
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className={`animate-fade-in`} style={{ animationDelay: `${index * 50}ms` }}>
               <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-stone-50 rounded-3xl border-2 border-dashed border-stone-200">
          <Filter size={48} className="mx-auto text-stone-300 mb-4" />
          <h3 className="text-xl font-bold text-stone-800 mb-2">لا توجد نتائج</h3>
          <p className="text-stone-500">حاول تغيير كلمات البحث أو الفلتر</p>
          <button 
             onClick={() => {setSearchTerm(''); setActiveCategory('الكل');}}
             className="mt-4 text-amber-700 font-bold hover:underline"
          >
            مسح جميع الفلاتر
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;