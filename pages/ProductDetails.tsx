import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { ArrowRight, ShoppingBag, Star, Clock, Heart } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-stone-800 mb-4">المنتج غير موجود</h2>
        <Link to="/products" className="text-amber-700 hover:underline">
          العودة للمنتجات
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-stone-500 text-sm mb-8">
        <Link to="/" className="hover:text-amber-700">الرئيسية</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-amber-700">المنتجات</Link>
        <span>/</span>
        <span className="text-stone-800 font-medium">{product.name}</span>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-stone-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Side */}
          <div className="h-[400px] lg:h-[600px] bg-stone-100 relative">
             <img 
               src={product.image} 
               alt={product.name} 
               className="w-full h-full object-cover"
             />
          </div>

          {/* Info Side */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">
                {product.category}
              </span>
              <button className="text-stone-400 hover:text-red-500 transition">
                <Heart size={24} />
              </button>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-amber-700">{product.price} جنيه</span>
              <div className="flex items-center gap-1 text-amber-400">
                <Star fill="currentColor" size={18} />
                <span className="text-stone-600 font-medium text-sm pt-1">(4.8 تقييم)</span>
              </div>
            </div>

            <p className="text-stone-600 text-lg leading-relaxed mb-8 border-b border-stone-100 pb-8">
              {product.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-stone-600">
                <Clock size={20} className="text-amber-600" />
                <span>وقت التحضير: 5-10 دقائق</span>
              </div>
              
              <div className="flex gap-4">
                <button 
                  className="flex-1 bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-amber-900/10"
                  onClick={() => alert('تمت إضافة المنتج للسلة بنجاح!')}
                >
                  <ShoppingBag size={20} />
                  <span>أضف إلى السلة</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related (Simple mockup) */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-stone-800 mb-6">قد يعجبك أيضاً</h3>
        <div className="flex gap-4 overflow-x-auto pb-4">
           {products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3).map(related => (
             <Link key={related.id} to={`/products/${related.id}`} className="min-w-[250px] bg-white p-4 rounded-lg shadow border border-stone-100 block hover:shadow-md transition">
                <img src={related.image} className="w-full h-40 object-cover rounded mb-3" alt={related.name} />
                <h4 className="font-bold text-stone-800">{related.name}</h4>
                <p className="text-amber-700 text-sm font-bold">{related.price} جنيه</p>
             </Link>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;