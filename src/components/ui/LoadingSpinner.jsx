import React from 'react';

export const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4',
  };

  return (
    <div
      className={`${sizeClasses[size]} border-yellow-800 border-t-transparent rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
};

export const LoadingDots = ({ className = '' }) => {
  return (
    <div className={`flex gap-1 ${className}`}>
      <div className="w-2 h-2 bg-yellow-800 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <div className="w-2 h-2 bg-yellow-800 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <div className="w-2 h-2 bg-yellow-800 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
  );
};