import React from 'react';
import { Search } from 'lucide-react';

const Header = ({ searchTerm, setSearchTerm }) => {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="flex items-center justify-between h-16 px-6">

                {/* Left Section */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Projects Table</h1>
                    <p className="text-sm text-gray-600">
                        Manage and track all your projects in the table form
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">

                    {/* Search */}
                    <div className="relative hidden md:block w-64">
                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                        />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-gray-100 border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Actions */}
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                        Add Project
                    </button>
                </div>

            </div>
        </header>

    );
};

export default Header;