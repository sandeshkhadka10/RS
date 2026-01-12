import { Menu, Search, Bell, User } from 'lucide-react';

const Header = ({ onMenuClick }) => (
  <header className="bg-white border-b sticky top-0 z-10">
    <div className="h-16 px-6 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden">
          <Menu />
        </button>

        <div>
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-sm text-gray-500">Manage your projects</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg">
          <Search size={16} />
          <input
            className="bg-transparent ml-2 outline-none text-sm"
            placeholder="Search..."
          />
        </div>

        <Bell />
        <User />
      </div>
    </div>
  </header>
);

export default Header;
