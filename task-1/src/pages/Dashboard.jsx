import { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import ActionBar from '../components/layout/ActionBar';
import ProjectCard from '../components/projects/ProjectCard';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const projects = [
    { name: 'Website Redesign', client: 'Acme Corp', description: 'Complete redesign of the corporate website with modern UI/UX principles', status: 'Active' },
    { name: 'Mobile App Development', client: 'Tech Startup', description: 'Build a cross-platform mobile application for iOS and Android', status: 'Active' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <ActionBar />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
