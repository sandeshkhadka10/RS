import React from 'react';

const TableHeader = () => {
  return (
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>
        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
          Project Name
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
          Status
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
          Start Date
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;