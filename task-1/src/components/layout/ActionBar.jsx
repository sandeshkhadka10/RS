import { Plus, Filter, Download } from 'lucide-react';

const ActionBar = ({ view, setView }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      {/* Primary Actions */}
      <div className="flex items-center space-x-3">
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          <span className="font-medium">New Project</span>
        </button>
        
        <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filter</span>
        </button>
      </div>

      {/* Secondary Actions */}
      <div className="flex items-center space-x-3">
        <button className="flex items-center space-x-2 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Download className="w-4 h-4" />
          <span className="text-sm font-medium">Export</span>
        </button>

        {/* View Toggle */}
        <div className="flex items-center bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setView('grid')}
            className={`px-3 py-1 rounded ${view === 'grid' ? 'bg-white shadow-sm' : ''}`}
          >
            <span className="text-sm font-medium">Grid</span>
          </button>
          <button
            onClick={() => setView('table')}
            className={`px-3 py-1 rounded ${view === 'table' ? 'bg-white shadow-sm' : ''}`}
          >
            <span className="text-sm font-medium">Table</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
