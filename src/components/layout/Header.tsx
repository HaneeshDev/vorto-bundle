
import React from 'react';
import { Link } from 'react-router-dom';
import { ZeroVortexLogo } from '@/assets/logo';
import { Button } from '@/components/ui/button';
import { ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { supabase } from '@/integrations/supabase/client';

const Header: React.FC = () => {
  const { getItemCount } = useCart();
  const [user, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);
  
  return (
    <header className="bg-zerovortex-dark border-b border-zerovortex-light py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <ZeroVortexLogo />
            <span className="sr-only">ZeroVortex</span>
          </Link>
          
          <nav className="hidden md:flex">
            <ul className="flex gap-8">
              <li>
                <Link to="/" className="text-white hover:text-zerovortex-neon transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-white hover:text-zerovortex-neon transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/lab" className="text-white hover:text-zerovortex-neon transition-colors">
                  ZV Lab
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-white hover:text-zerovortex-neon transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-zerovortex-neon transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="text-white hover:text-zerovortex-neon">
              <ShoppingCart className="h-5 w-5" />
              {getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-zerovortex-neon text-zerovortex-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>

          <Link to={user ? "/profile" : "/auth"}>
            <div className="h-9 w-9 rounded-full bg-zerovortex-light flex items-center justify-center text-white">
              {user ? (
                <span className="font-medium text-sm">
                  {user.email?.charAt(0).toUpperCase()}
                </span>
              ) : (
                <User className="h-5 w-5" />
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
