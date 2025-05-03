
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

// Extend Window interface to include Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

const Checkout: React.FC = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const navigate = useNavigate();
  
  const totalAmount = getCartTotal();
  
  useEffect(() => {
    if (items.length === 0) {
      navigate('/cart');
      return;
    }
    
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, [items, navigate]);
  
  // Function to initialize Razorpay payment
  const handlePayment = () => {
    if (!scriptLoaded) {
      toast({
        title: "Payment gateway not loaded",
        description: "Please try again in a moment",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // In a real application, you would generate this on the server
    const orderId = 'order_' + Math.random().toString(36).substring(2, 15);
    
    const options = {
      key: "rzp_test_YourRazorpayKeyHere", // Replace with your actual key in production
      amount: totalAmount,
      currency: "INR",
      name: "ZeroVortex",
      description: "Purchase of digital bundles",
      order_id: orderId,
      handler: function (response: any) {
        // Handle successful payment
        toast({
          title: "Payment successful!",
          description: "Your order has been placed.",
        });
        
        // In a real app, verify payment on server before clearing cart
        clearCart();
        navigate('/purchase-success');
      },
      prefill: {
        name: "ZeroVortex User",
        email: "user@zerovortex.com",
        contact: "9999999999"
      },
      theme: {
        color: "#36f25e"
      },
      modal: {
        ondismiss: function() {
          setIsLoading(false);
        }
      }
    };
    
    try {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Razorpay error:", error);
      toast({
        title: "Payment error",
        description: "There was a problem initiating payment. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="zerovortex-card mb-6">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Your Bundle Order</h2>
              
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <div>
                      <div className="font-medium">{item.product.name}</div>
                      <div className="text-sm text-zerovortex-muted">
                        Quantity: {item.quantity}
                      </div>
                    </div>
                    <div className="font-medium">
                      ${((item.product.price * item.quantity) / 100).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="zerovortex-card">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 border border-zerovortex-light rounded-md bg-zerovortex-dark">
                  <input 
                    type="radio" 
                    id="card-payment" 
                    name="payment-method" 
                    className="h-4 w-4 accent-zerovortex-neon"
                    defaultChecked
                  />
                  <label htmlFor="card-payment" className="flex-grow cursor-pointer">
                    <div className="font-medium">Credit/Debit Card</div>
                    <div className="text-sm text-zerovortex-muted">
                      Pay securely using your card
                    </div>
                  </label>
                </div>
                
                <div className="flex items-center space-x-3 p-3 border border-zerovortex-light rounded-md bg-zerovortex-dark">
                  <input 
                    type="radio" 
                    id="upi-payment" 
                    name="payment-method" 
                    className="h-4 w-4 accent-zerovortex-neon"
                  />
                  <label htmlFor="upi-payment" className="flex-grow cursor-pointer">
                    <div className="font-medium">UPI</div>
                    <div className="text-sm text-zerovortex-muted">
                      Pay using UPI apps like Google Pay, PhonePe, etc.
                    </div>
                  </label>
                </div>
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
                  <span>${(totalAmount / 100).toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-zerovortex-muted">Tax</span>
                  <span>$0.00</span>
                </div>
                
                <div className="pt-4 border-t border-zerovortex-light flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-zerovortex-neon">
                    ${(totalAmount / 100).toFixed(2)}
                  </span>
                </div>
              </div>
              
              <Button 
                className="zerovortex-button w-full"
                onClick={handlePayment}
                disabled={isLoading || !scriptLoaded || items.length === 0}
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Pay ${(totalAmount / 100).toFixed(2)}
              </Button>
              
              <p className="mt-4 text-xs text-center text-zerovortex-muted">
                By completing your purchase you agree to our{' '}
                <a href="#" className="text-zerovortex-neon hover:underline">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
