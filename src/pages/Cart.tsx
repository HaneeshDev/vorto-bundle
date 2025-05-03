
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/cart/CartItem';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const Cart: React.FC = () => {
  const { items, getCartTotal } = useCart();
  
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="zerovortex-card p-8 text-center">
          <div className="mb-6 flex justify-center">
            <ShoppingCart className="h-16 w-16 text-zerovortex-muted" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="mb-6 text-zerovortex-muted">Add some products to your cart and they'll appear here.</p>
          <Link to="/shop">
            <Button className="zerovortex-button">Start Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="zerovortex-card">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
              
              <div>
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
              
              <div className="mt-6">
                <Link to="/shop">
                  <Button variant="link" className="text-zerovortex-neon p-0">
                    ← Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="zerovortex-card sticky top-4">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-zerovortex-muted">Subtotal</span>
                  <span>${(getCartTotal() / 100).toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-zerovortex-muted">Tax</span>
                  <span>$0.00</span>
                </div>
                
                <div className="pt-4 border-t border-zerovortex-light flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-zerovortex-neon">
                    ${(getCartTotal() / 100).toFixed(2)}
                  </span>
                </div>
              </div>
              
              <Link to="/checkout">
                <Button className="zerovortex-button w-full">
                  Proceed to Checkout
                </Button>
              </Link>
              
              <div className="mt-6">
                <div className="text-center text-sm text-zerovortex-muted">
                  We accept payment via:
                </div>
                <div className="flex justify-center gap-3 mt-3">
                  <div className="h-8 w-12 bg-zerovortex-light rounded flex items-center justify-center text-xs font-medium">
                    Card
                  </div>
                  <div className="h-8 w-12 bg-zerovortex-light rounded flex items-center justify-center text-xs font-medium">
                    UPI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
