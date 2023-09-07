const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const fields = lines.shift().split(',');

    const fieldCounts = {};

    fields.forEach((field, index) => {
      const students = lines.map(line => line.split(',')[index]);
      const nonEmptyStudents = students.filter(student => student.trim() !== '');
      fieldCounts[field] = nonEmptyStudents.length;
    });

    console.log(`Number of students: ${lines.length}`);
    for (const field in fieldCounts) {
      const count = fieldCounts[field];
      const studentsList = lines
        .map(line => line.split(',')[fields.indexOf(field)].trim())
        .filter(student => student !== '');

      console.log(`Number of students in ${field}: ${count}. List: ${studentsList.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

