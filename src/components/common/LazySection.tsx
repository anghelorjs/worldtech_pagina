import React, { Suspense, lazy } from 'react';
import LoadingSpinner from './LoadingSpinner'; // Crearemos este componente

interface LazySectionProps {
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  props?: any;
}

const LazySection: React.FC<LazySectionProps> = ({ component: Component, props }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazySection;