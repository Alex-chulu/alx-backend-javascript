const fs = require('fs');

function countStudents(path) {
  try {
    let d = fs.readFileSync(path, 'utf8').toString().split('\n');
    d = d.slice(1, d.length - 1);
    console.log(`Number of students: ${d.length}`);
    const obj = {};
    d.forEach((el) => {
      const student = el.split(',');
      if (!obj[student[3]]) obj[student[3]] = [];
      obj[student[3]].push(student[0]);
    });
    for (const cls in obj) {
      if (cls) console.log(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
