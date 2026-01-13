import React,{useState} from 'react';
import Header from '../components/layout/Header';
import TableHeader from '../components/layout/TableHeader';
import ProjectTableRow from '../components/projects/ProjectTableRow';

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      client: 'Acme Corp',
      status: 'active',
      startDate: '2024-01-15',
      budget: '$45,000',
    },
    {
      id: 2,
      name: 'Mobile App Development',
      client: 'TechStart Inc',
      status: 'completed',
      startDate: '2023-12-01',
      budget: '$120,000',
    },
    {
      id: 3,
      name: 'Brand Identity',
      client: 'Fresh Foods',
      status: 'pending',
      startDate: '2024-02-20',
      budget: '$25,000',
    },
    {
      id: 4,
      name: 'E-commerce Platform',
      client: 'ShopMart',
      status: 'active',
      startDate: '2024-01-10',
      budget: '$85,000',
    },
    {
      id: 5,
      name: 'Marketing Campaign',
      client: 'Global Ventures',
      status: 'on-hold',
      startDate: '2024-03-01',
      budget: '$35,000',
    },
    {
      id: 6,
      name: 'API Integration',
      client: 'DataFlow Systems',
      status: 'active',
      startDate: '2024-01-25',
      budget: '$60,000',
    },
    {
      id: 7,
      name: 'UI/UX Audit',
      client: 'DesignHub',
      status: 'completed',
      startDate: '2023-11-15',
      budget: '$18,000',
    },
    {
      id: 8,
      name: 'Cloud Migration',
      client: 'Enterprise Solutions',
      status: 'pending',
      startDate: '2024-04-01',
      budget: '$95,000',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
       <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <TableHeader />
              <tbody className="divide-y divide-gray-200">
                {projects.map((project) => (
                  <ProjectTableRow key={project.id} project={project} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Table;