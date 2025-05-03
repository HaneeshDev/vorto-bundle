
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  
  return (
    <div className="zerovortex-card overflow-hidden flex flex-col">
      <div className="aspect-square overflow-hidden bg-zerovortex relative">
        <div className="absolute inset-0 flex items-center justify-center">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-zerovortex-light flex items-center justify-center">
              <span className="text-zerovortex-neon text-4xl opacity-20">ZV</span>
            </div>
          )}
        </div>
        <div className="absolute top-2 right-2">
          <span className="inline-block bg-zerovortex-neon text-zerovortex-dark text-xs px-2 py-1 rounded">
            {product.category === 'software' ? 'Software' : product.category === 'hardware' ? 'Hardware' : 'Other'}
          </span>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2 text-white">
          <Link to={`/product/${product.id}`} className="hover:text-zerovortex-neon transition-colors">
            {product.name}
          </Link>
        </h3>
        
        <p className="text-zerovortex-muted text-sm line-clamp-2 mb-4">
          {product.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-zerovortex-neon font-bold">
            ${(product.price / 100).toFixed(2)}
          </span>
          
          <Button 
            onClick={() => addItem(product)}
            className="zerovortex-button"
            size="sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
