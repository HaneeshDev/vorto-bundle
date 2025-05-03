
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductGrid from '@/components/shop/ProductGrid';
import { Product } from '@/types';
import { getProductsByCategory, categories } from '@/data/products';

const Shop: React.FC = () => {
  const location = useLocation();
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState<string>('All Bundles');
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categorySlug = queryParams.get('category') || 'all';
    
    const filteredProducts = getProductsByCategory(categorySlug);
    setProducts(filteredProducts);
    
    const category = categories.find(cat => cat.slug === categorySlug);
    setCategoryName(category ? category.name : 'All Bundles');
  }, [location.search]);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">{categoryName}</h1>
        <p className="text-zerovortex-muted">
          {products.length} {products.length === 1 ? 'bundle' : 'bundles'} available
        </p>
      </div>
      
      {products.length === 0 ? (
        <div className="zerovortex-card p-8 text-center">
          <h2 className="text-xl font-semibold mb-4">No products found</h2>
          <p>There are no products in this category yet.</p>
        </div>
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
};

export default Shop;
