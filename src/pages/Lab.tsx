
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Lab: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">ZeroVortex Lab</h1>
      
      <div className="zerovortex-card mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Research & Innovation Hub</h2>
          <p className="text-zerovortex-muted mb-6">
            Welcome to the ZeroVortex Lab, where students collaborate on cutting-edge research and development projects.
            Access our tools, resources, and community to accelerate your learning and innovation journey.
          </p>
          <Link to="/shop">
            <Button className="zerovortex-button">
              Explore Lab Bundles
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="text-center text-zerovortex-muted">
        More lab features coming soon!
      </div>
    </div>
  );
};

export default Lab;
