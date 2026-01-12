import { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import ActionBar from '../components/layout/ActionBar';
import ProjectCard from '../components/projects/ProjectCard';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const projects = [
    { name: 'Website Redesign', client: 'Acme Corp', description: 'Complete redesign of the corporate website with modern UI/UX principles', progress: 75, status: 'active' },
    { name: 'Mobile App Development', client: 'Tech Startup', description: 'Build a cross-platform mobile application for iOS and Android', progress: 45, status: 'active' },
    { name: 'Brand Identity', client: 'Fashion Brand', description: 'Create a comprehensive brand identity including logo, colors, and guidelines', progress: 90, status: 'completed' },
    { name: 'E-commerce Platform', client: 'Retail Co', description: 'Develop a scalable e-commerce platform with payment integration', progress: 30, status: 'pending' },
    { name: 'Marketing Campaign', client: 'Local Business', description: 'Plan and execute a digital marketing campaign across multiple channels', progress: 60, status: 'active' },
    { name: 'Data Analytics Dashboard', client: 'Enterprise Inc', description: 'Build a real-time analytics dashboard for business intelligence', progress: 85, status: 'active' },
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
