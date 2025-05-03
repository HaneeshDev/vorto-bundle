
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Check } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addItem } = useCart();
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="zerovortex-card p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/shop">
            <Button className="zerovortex-button">Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/shop" className="text-zerovortex-muted hover:text-zerovortex-neon">
          ← Back to Shop
        </Link>
      </div>
      
      <div className="zerovortex-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-zerovortex-light flex items-center justify-center overflow-hidden">
            {product.image ? (
              <img 
                src={product.image} 
                alt={product.name} 
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full bg-zerovortex flex items-center justify-center">
                <span className="text-zerovortex-neon text-8xl opacity-20">ZV</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-col">
            <div>
              <span className="inline-block bg-zerovortex-neon text-zerovortex-dark text-xs px-2 py-1 rounded mb-3">
                {product.category === 'software' ? 'Software Bundle' : product.category === 'hardware' ? 'Hardware Bundle' : 'Other Bundle'}
              </span>
              
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <p className="text-zerovortex-muted mb-6">
                {product.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-zerovortex-neon mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-zerovortex-neon">
                  ${(product.price / 100).toFixed(2)}
                </span>
                <span className="text-zerovortex-muted text-sm">Digital product</span>
              </div>
              
              <Button 
                onClick={() => addItem(product)}
                className="zerovortex-button w-full mb-3"
                size="lg"
              >
                Add to Cart
              </Button>
              
              <Button 
                onClick={() => {
                  addItem(product);
                  window.location.href = '/cart';
                }}
                className="zerovortex-button-outline w-full"
                variant="outline"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
