
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Research: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Research Directory</h1>
      
      <div className="zerovortex-card mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Student Research Projects</h2>
          <p className="text-zerovortex-muted mb-6">
            Browse ongoing and completed research projects from the ZeroVortex community.
            Find collaborators, resources, and opportunities to contribute to groundbreaking research.
          </p>
          <Link to="/shop">
            <Button className="zerovortex-button">
              Explore Research Tools
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="text-center text-zerovortex-muted">
        Research directory content coming soon!
      </div>
    </div>
  );
};

export default Research;
