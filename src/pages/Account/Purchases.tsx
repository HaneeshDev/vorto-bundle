
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// Placeholder data for purchased bundles
const dummyPurchases = [
  {
    id: 'purchase-1',
    date: '2023-11-15',
    products: [
      {
        id: '1',
        name: 'AI Research Toolkit',
        description: 'Comprehensive dataset and tools for machine learning research projects.',
        image: '/assets/products/ai-toolkit.png'
      },
      {
        id: '3',
        name: 'Data Science Essentials',
        description: 'Comprehensive data analysis and visualization tools.',
        image: '/assets/products/datascience.png'
      }
    ],
    total: 4698
  },
  {
    id: 'purchase-2',
    date: '2023-10-22',
    products: [
      {
        id: '5',
        name: 'IoT Development Bundle',
        description: 'Complete Internet of Things development package for smart device creation.',
        image: '/assets/products/iot-bundle.png'
      }
    ],
    total: 2899
  }
];

const Purchases: React.FC = () => {
  const [purchases] = useState(dummyPurchases);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Data Bundles</h1>
      
      {purchases.length === 0 ? (
        <div className="zerovortex-card p-8 text-center">
          <h2 className="text-xl font-semibold mb-4">No purchases yet</h2>
          <p className="mb-6 text-zerovortex-muted">You haven't purchased any data bundles yet.</p>
          <Button className="zerovortex-button">
            Explore Bundles
          </Button>
        </div>
      ) : (
        <div className="space-y-8">
          {purchases.map((purchase) => (
            <div key={purchase.id} className="zerovortex-card">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-semibold">Purchase #{purchase.id.split('-')[1]}</h2>
                    <p className="text-sm text-zerovortex-muted">
                      {new Date(purchase.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-zerovortex-neon font-semibold">
                    ${(purchase.total / 100).toFixed(2)}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {purchase.products.map((product) => (
                    <div key={product.id} className="flex gap-4 bg-zerovortex-dark p-4 rounded-md">
                      <div className="h-20 w-20 flex-shrink-0 bg-zerovortex-light rounded overflow-hidden">
                        {product.image ? (
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center">
                            <span className="text-zerovortex-neon opacity-30">ZV</span>
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-zerovortex-muted mt-1">
                          {product.description}
                        </p>
                        <div className="mt-3">
                          <Button className="zerovortex-button-outline" size="sm">
                            Access Bundle
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Purchases;
