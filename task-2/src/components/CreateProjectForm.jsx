import React, { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { validateForm } from '../utils/validation';

const CreateProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    clientName: '',
    startDate: '',
    budget: '',
    priority: 'medium'
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = () => {
    const newErrors = validateForm(formData);
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log('Form submitted:', formData);
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleReset = () => {
    setFormData({
      projectName: '',
      clientName: '',
      startDate: '',
      budget: '',
      priority: 'medium'
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl p-8">
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Project</h1>
            <p className="text-gray-600">Fill in the project details below</p>
          </div>

          {submitted && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
              <CheckCircle2 className="text-green-600" size={20} />
              <span className="text-green-800 font-medium">Project created successfully!</span>
            </div>
          )}

          <div className="space-y-6">
            
            {/* Project Name */}
            <div>
              <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-2">
                Project Name *
              </label>
              <input
                id="projectName"
                name="projectName"
                type="text"
                placeholder="e.g., Website Redesign 2024"
                value={formData.projectName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 ${
                  errors.projectName 
                    ? 'border-red-300 focus:ring-red-200' 
                    : 'border-gray-300 focus:ring-blue-200'
                }`}
              />
              {errors.projectName && (
                <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
                  <AlertCircle size={14} />
                  <span>{errors.projectName}</span>
                </div>
              )}
              {!errors.projectName && (
                <p className="text-sm text-gray-500 mt-2">Enter a descriptive name for your project</p>
              )}
            </div>

            {/* Client Name */}
            <div>
              <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-2">
                Client Name *
              </label>
              <input
                id="clientName"
                name="clientName"
                type="text"
                placeholder="e.g., Acme Corporation"
                value={formData.clientName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 ${
                  errors.clientName 
                    ? 'border-red-300 focus:ring-red-200' 
                    : 'border-gray-300 focus:ring-blue-200'
                }`}
              />
              {errors.clientName && (
                <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
                  <AlertCircle size={14} />
                  <span>{errors.clientName}</span>
                </div>
              )}
              {!errors.clientName && (
                <p className="text-sm text-gray-500 mt-2">Who is this project for?</p>
              )}
            </div>

            {/* Start Date */}
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                Start Date *
              </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 ${
                  errors.startDate 
                    ? 'border-red-300 focus:ring-red-200' 
                    : 'border-gray-300 focus:ring-blue-200'
                }`}
              />
              {errors.startDate && (
                <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
                  <AlertCircle size={14} />
                  <span>{errors.startDate}</span>
                </div>
              )}
              {!errors.startDate && (
                <p className="text-sm text-gray-500 mt-2">When will the project begin?</p>
              )}
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                Budget (USD) *
              </label>
              <input
                id="budget"
                name="budget"
                type="number"
                placeholder="10000"
                value={formData.budget}
                onChange={handleChange}
                min="0"
                step="100"
                className={`w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 ${
                  errors.budget 
                    ? 'border-red-300 focus:ring-red-200' 
                    : 'border-gray-300 focus:ring-blue-200'
                }`}
              />
              {errors.budget && (
                <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
                  <AlertCircle size={14} />
                  <span>{errors.budget}</span>
                </div>
              )}
              {!errors.budget && (
                <p className="text-sm text-gray-500 mt-2">Total project budget in US dollars</p>
              )}
            </div>

            {/* Priority */}
            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                Priority Level *
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
              <p className="text-sm text-gray-500 mt-2">How urgent is this project?</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <button
                onClick={handleSubmit}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Create Project
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectForm;