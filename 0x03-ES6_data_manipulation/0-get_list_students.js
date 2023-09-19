// Define a function named getListStudents
function getListStudents() {
  // Return an array of objects
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}

// Export the function to make it accessible to other modules
module.exports = getListStudents;
