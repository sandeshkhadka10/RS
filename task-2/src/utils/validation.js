export const validateProjectName = (name) => {
  if (!name.trim()) {
    return 'Project name is required';
  }
  if (name.length < 3) {
    return 'Project name must be at least 3 characters';
  }
  return '';
};

export const validateClientName = (name) => {
  if (!name.trim()) {
    return 'Client name is required';
  }
  return '';
};

export const validateStartDate = (date) => {
  if (!date) {
    return 'Start date is required';
  }
  return '';
};

export const validateBudget = (budget) => {
  if (!budget) {
    return 'Budget is required';
  }
  if (parseFloat(budget) <= 0) {
    return 'Budget must be greater than 0';
  }
  return '';
};

export const validateForm = (formData) => {
  const errors = {};
  
  const nameError = validateProjectName(formData.projectName);
  if (nameError) errors.projectName = nameError;
  
  const clientError = validateClientName(formData.clientName);
  if (clientError) errors.clientName = clientError;
  
  const dateError = validateStartDate(formData.startDate);
  if (dateError) errors.startDate = dateError;
  
  const budgetError = validateBudget(formData.budget);
  if (budgetError) errors.budget = budgetError;
  
  return errors;
};