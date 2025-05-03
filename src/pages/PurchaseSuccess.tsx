
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PurchaseSuccess: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="zerovortex-card p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-16 w-16 rounded-full bg-zerovortex-neon bg-opacity-20 flex items-center justify-center">
              <Check className="h-8 w-8 text-zerovortex-neon" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Purchase Successful!</h1>
          
          <p className="mb-8 text-zerovortex-muted">
            Thank you for your purchase. Your data bundles are now available in your account.
          </p>
          
          <div className="mb-8 p-6 border border-zerovortex-light rounded-lg bg-zerovortex-dark">
            <h2 className="text-lg font-semibold mb-4">Order Details</h2>
            <div className="flex justify-between mb-2">
              <span className="text-zerovortex-muted">Order ID:</span>
              <span>#ZV{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zerovortex-muted">Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/account/purchases">
              <Button className="zerovortex-button">
                View My Bundles
              </Button>
            </Link>
            
            <Link to="/shop">
              <Button className="zerovortex-button-outline">
                Continue Shopping
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 border-t border-zerovortex-light pt-6">
            <p className="text-sm text-zerovortex-muted">
              Need help? Contact our <a href="#" className="text-zerovortex-neon hover:underline">Support Team</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSuccess;
