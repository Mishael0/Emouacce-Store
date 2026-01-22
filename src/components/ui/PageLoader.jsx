import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

const PageLoader = ({ message = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="xl" className="mx-auto mb-4" />
        <p className="text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  );
};

export default PageLoader;