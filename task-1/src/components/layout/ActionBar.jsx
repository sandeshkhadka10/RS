import { Plus, Filter, Download } from 'lucide-react';

const ActionBar = () => (
  <div className="flex justify-between flex-wrap gap-4 mb-6">
    <div className="flex gap-3">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
        <Plus size={16} /> New Project
      </button>

      <button className="border px-4 py-2 rounded-lg flex items-center gap-2">
        <Filter size={16} /> Filter
      </button>
    </div>

    <button className="flex items-center gap-2 text-gray-600">
      <Download size={16} /> Export
    </button>
  </div>
);

export default ActionBar;
