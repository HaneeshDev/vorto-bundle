
import React from 'react';
import { CartItem as CartItemType } from '@/types';
import { Button } from '@/components/ui/button';
import { Trash, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;
  
  return (
    <div className="flex items-center gap-4 py-4 border-b border-zerovortex-light">
      <div className="flex-shrink-0 h-20 w-20 bg-zerovortex-light overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-zerovortex">
            <span className="text-zerovortex-neon text-xl opacity-30">ZV</span>
          </div>
        )}
      </div>
      
      <div className="flex-grow">
        <Link to={`/product/${product.id}`} className="font-medium hover:text-zerovortex-neon transition-colors">
          {product.name}
        </Link>
        <div className="text-sm text-zerovortex-muted mt-1">
          {product.category === 'software' ? 'Software Bundle' : product.category === 'hardware' ? 'Hardware Bundle' : 'Other'}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8 rounded-full border-zerovortex-light"
          onClick={() => updateQuantity(product.id, quantity - 1)}
          disabled={quantity <= 1}
        >
          <Minus className="h-3 w-3" />
          <span className="sr-only">Decrease</span>
        </Button>
        
        <span className="w-8 text-center font-medium">{quantity}</span>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8 rounded-full border-zerovortex-light"
          onClick={() => updateQuantity(product.id, quantity + 1)}
        >
          <Plus className="h-3 w-3" />
          <span className="sr-only">Increase</span>
        </Button>
      </div>
      
      <div className="text-right w-24 font-medium">
        ${((product.price * quantity) / 100).toFixed(2)}
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-zerovortex-muted hover:text-destructive"
        onClick={() => removeItem(product.id)}
      >
        <Trash className="h-4 w-4" />
        <span className="sr-only">Remove</span>
      </Button>
    </div>
  );
};

export default CartItem;
