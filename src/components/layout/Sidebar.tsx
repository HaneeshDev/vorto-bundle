
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { categories } from '@/data/products';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  return (
    <aside className="zerovortex-sidebar w-64 h-full min-h-screen p-4">
      <div className="mb-6">
        <h2 className="text-zerovortex-neon text-lg font-semibold mb-4">Categories</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/shop"
                className={cn(
                  "zerovortex-sidebar-item flex items-center justify-between", 
                  location.pathname === '/shop' && !location.search && "zerovortex-sidebar-item-active"
                )}
              >
                <span>All Bundles</span>
                <span className="bg-zerovortex text-zerovortex-muted px-2 py-1 rounded-md text-xs">
                  {categories.reduce((total, cat) => total + cat.count, 0)}
                </span>
              </Link>
            </li>
            {categories.map(category => (
              <li key={category.id}>
                <Link
                  to={`/shop?category=${category.slug}`}
                  className={cn(
                    "zerovortex-sidebar-item flex items-center justify-between", 
                    location.search?.includes(category.slug) && "zerovortex-sidebar-item-active"
                  )}
                >
                  <span>{category.name}</span>
                  <span className="bg-zerovortex text-zerovortex-muted px-2 py-1 rounded-md text-xs">
                    {category.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="border-t border-zerovortex-light pt-6">
        <h2 className="text-zerovortex-neon text-lg font-semibold mb-4">Community</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="zerovortex-sidebar-item block"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://chat.whatsapp.com/GJbDWkcTvlwBG9cmhNTy2S"
                target="_blank"
                rel="noopener noreferrer"
                className="zerovortex-sidebar-item block"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <Link to="/forums" className="zerovortex-sidebar-item block">
                Forums
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="mt-auto pt-6">
        <div className="zerovortex-card border border-zerovortex-neon bg-gradient-to-b from-zerovortex-dark to-zerovortex p-4">
          <h3 className="text-zerovortex-neon font-semibold mb-2">Join ZV Lab</h3>
          <p className="text-sm text-zerovortex-text mb-4">Get access to exclusive research tools and community.</p>
          <Link to="/lab">
            <button className="zerovortex-button w-full">Learn More</button>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
