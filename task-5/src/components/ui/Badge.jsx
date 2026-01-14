import React from 'react';

const Badge = ({ children, status = 'default' }) => {
  const statusColors = {
    default: 'bg-gray-100 text-gray-800',
    active: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    inactive: 'bg-red-100 text-red-800',
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}>
      {children}
    </span>
  );
};

export default Badge;