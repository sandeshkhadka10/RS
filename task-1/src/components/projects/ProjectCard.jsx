import { Eye, Edit, Trash2, MoreVertical } from 'lucide-react';

const statusColors = {
  active: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-blue-100 text-blue-800',
};

const ProjectCard = ({ project }) => (
  <div className="bg-white border rounded-xl p-6 hover:shadow-lg">
    <div className="flex justify-between mb-4">
      <div>
        <h3 className="font-semibold text-lg">{project.name}</h3>
        <p className="text-sm text-gray-500">{project.client}</p>
      </div>
      <MoreVertical />
    </div>

    <p className="text-sm text-gray-600 mb-4">{project.description}</p>

    <div className="mb-4">
      <div className="flex justify-between text-xs mb-1">
        <span>Progress</span>
        <span>{project.progress}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded">
        <div
          className="h-2 bg-blue-600 rounded"
          style={{ width: `${project.progress}%` }}
        />
      </div>
    </div>

    <div className="flex justify-between items-center pt-4 border-t">
      <span className={`px-3 py-1 rounded-full text-xs ${statusColors[project.status]}`}>
        {project.status}
      </span>

      <div className="flex gap-2">
        <Eye size={16} />
        <Edit size={16} />
        <Trash2 size={16} className="text-red-600" />
      </div>
    </div>
  </div>
);

export default ProjectCard;
