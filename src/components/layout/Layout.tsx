
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Toaster } from '@/components/ui/toaster';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isShopOrCartRoute = location.pathname.includes('/shop') || location.pathname.includes('/cart') || location.pathname.includes('/product');
  
  return (
    <div className="min-h-screen bg-zerovortex">
      <Header />
      <div className="flex">
        {isShopOrCartRoute && (
          <Sidebar />
        )}
        <main className={`flex-1 ${isShopOrCartRoute ? 'pl-0' : 'container mx-auto px-4 py-8'}`}>
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  );
};

export default Layout;
