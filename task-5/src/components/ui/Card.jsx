import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      {title && <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>}
      <div className="text-gray-600">{children}</div>
    </div>
  );
};

export default Card;