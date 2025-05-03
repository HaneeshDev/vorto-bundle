
import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Software Bundles',
    slug: 'software-bundles',
    count: 4
  },
  {
    id: '2',
    name: 'Hardware Bundles',
    slug: 'hardware-bundles',
    count: 3
  },
  {
    id: '3',
    name: 'Research Tools',
    slug: 'research-tools',
    count: 2
  },
  {
    id: '4',
    name: 'Learning Materials',
    slug: 'learning-materials',
    count: 3
  },
  {
    id: '5',
    name: 'Project Kits',
    slug: 'project-kits',
    count: 2
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Simulation Software Bundle',
    description: 'Comprehensive dataset and tools for machine learning research projects.',
    price: 2499,
    category: 'software',
    image: 'src/assets/simulation.png',
    features: [
      'Curated datasets for ML training',
      'Pre-configured Jupyter notebooks',
      'Algorithm implementation examples',
      'Performance benchmarking tools',
      'Research paper references'
    ]
  },
  {
    id: '2',
    name: 'Quantum Computing Software',
    description: 'Complete software development resources for student projects.',
    price: 1899,
    category: 'quantum',
    image: 'src/assets/Quantum.png',
    features: [
      'IDE licenses and plugins',
      'Cloud credits',
      'Git repository templates',
      'CI/CD pipeline setups',
      'Code review tools'
    ]
  },
  {
    id: '3',
    name: 'Hardware Prototyping Bundle',
    description: 'Comprehensive data analysis and visualization tools.',
    price: 2199,
    category: 'hardware',
    image: 'src/assets/hardware.png',
    features: [
      'Statistical analysis libraries',
      'Visualization frameworks',
      'Data cleaning tools',
      'Predictive modeling templates',
      'Kaggle premium membership'
    ]
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') {
    return products;
  }
  
  return products.filter(product => {
    if (category === 'software-bundles' && product.category === 'software') {
      return true;
    }
    if (category === 'hardware-bundles' && product.category === 'hardware') {
      return true;
    }
    if (category === 'research-tools' && (product.category === 'software' || product.category === 'hardware')) {
      return product.name.toLowerCase().includes('research');
    }
    if (category === 'learning-materials' && product.category === 'other') {
      return true;
    }
    if (category === 'project-kits' && product.category === 'hardware') {
      return product.name.toLowerCase().includes('kit');
    }
    return false;
  });
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
