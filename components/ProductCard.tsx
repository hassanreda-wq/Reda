import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
      <div className="relative overflow-hidden h-64 bg-stone-50">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </Link>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-stone-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          {product.category}
        </div>
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
           <Link 
             to={`/products/${product.id}`}
             className="bg-white text-stone-800 p-3 rounded-full hover:bg-amber-500 hover:text-white transition transform scale-0 group-hover:scale-100 duration-300 shadow-lg"
             title="عرض التفاصيل"
           >
             <Eye size={20} />
           </Link>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <h3 className="text-lg font-bold text-stone-800 leading-tight group-hover:text-amber-700 transition-colors">
            <Link to={`/products/${product.id}`}>
              {product.name}
            </Link>
          </h3>
        </div>
        
        <p className="text-stone-500 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
          <span className="text-xl font-extrabold text-amber-700">{product.price} <span className="text-xs font-normal text-stone-500">جنيه</span></span>
          <button 
            className="flex items-center gap-2 bg-stone-100 hover:bg-stone-800 hover:text-white text-stone-700 text-sm font-bold py-2 px-4 rounded-lg transition-all"
            onClick={(e) => {
              e.preventDefault();
              alert('تمت الإضافة للسلة');
            }}
          >
            <ShoppingCart size={16} />
            <span>أضف</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;