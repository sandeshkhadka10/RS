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
      status: 'active',
      startDate: '2024-01-15',
    },
    {
      id: 2,
      name: 'Mobile App Development',
      status: 'completed',
      startDate: '2023-12-01',
    },
    {
      id: 3,
      name: 'Brand Identity',
      status: 'pending',
      startDate: '2024-02-20',
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