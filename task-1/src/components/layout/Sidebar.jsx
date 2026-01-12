import React, { useState } from 'react';
import { Home, BarChart3, Users, FileText, Settings, User } from 'lucide-react';

const menuItems = [
  { id: 'dashboard', icon: Home, label: 'Dashboard' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics' },
  { id: 'users', icon: Users, label: 'Users' },
  { id: 'documents', icon: FileText, label: 'Documents' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30
        w-64 bg-white border-r
        transform transition-transform
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 px-6 flex items-center border-b">
            <span className="text-xl font-bold">Dashboard</span>
          </div>

          {/* Nav */}
          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveItem(id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  ${activeItem === id
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-50 text-gray-700'}
                `}
              >
                <Icon size={20} />
                {label}
              </button>
            ))}
          </nav>

          {/* User */}
          <div className="p-4 border-t flex items-center gap-3">
            <User />
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">john@example.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
