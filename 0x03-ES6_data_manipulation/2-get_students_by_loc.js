function getStudentsByLocation(students, city) {
  // Use the filter function to find students in the specified city
  const filteredStudents = students.filter(student => student.location === city);

  return filteredStudents;
}

// const students = getListStudents(); // Get the list of students
// const studentsInSF = getStudentsByLocation(students, 'San Francisco'); // Get students in San Francisco

module.exports = getStudentsByLocation;

