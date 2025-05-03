
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'software' | 'hardware' | 'quantum' | 'other';
  image: string;
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  purchases: Purchase[];
}

export interface Purchase {
  id: string;
  products: Product[];
  purchaseDate: string;
  total: number;
}

export interface PaymentDetails {
  orderId: string;
  amount: number;
  currency: string;
  receiptId: string;
  status: 'pending' | 'completed' | 'failed';
}
