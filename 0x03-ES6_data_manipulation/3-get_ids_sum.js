function getStudentIdsSum(students) {
  // Use the reduce function to calculate the sum of student IDs
  const sum = students.reduce((accumulator, student) => accumulator + student.id, 0);

  return sum;
}
// const students = getListStudents(); // Get the list of students
module.exports = getStudentIdsSum;
