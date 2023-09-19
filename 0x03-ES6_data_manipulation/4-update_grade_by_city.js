// Get students by City
function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

      if (gradeObject) {
        return {
          ...student,
          grade: gradeObject.grade,
        };
      }

      return {
        ...student,
        grade: 'N/A',
      };
    });
}

module.exports = updateStudentGradeByCity;

