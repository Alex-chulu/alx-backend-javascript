// Define a function named getListStudents ID:wq
function getListStudentIds(arrayOfStudents) {
  // Check if the input is an array
  if (!Array.isArray(arrayOfStudents)) {
    return [];
  }

  // Use the map function to extract student IDs
  const studentIds = arrayOfStudents.map(student => student.id);

  return studentIds;
}

// const students = getListStudents(); // Get the list of students
// const studentIds = getListStudentIds(students); // Get the list of student IDs

module.exports = getListStudentIds;

