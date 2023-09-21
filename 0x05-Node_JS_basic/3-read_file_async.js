const fs = require('fs');

function countStudents(path) {
  const promise = (res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) rej(Error('Cannot load the database'));
      if (data) {
        let newD = data.toString().split('\n');
        newD = newD.slice(1, newD.length - 1);
        console.log(`Number of students: ${newD.length}`);
        const obj = {};
        newD.forEach((el) => {
          const student = el.split(',');
          if (!obj[student[3]]) obj[student[3]] = [];
          obj[student[3]].push(student[0]);
        });
        for (const cls in obj) {
          if (cls) console.log(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`);
        }
      }
      res();
    });
  };
  return new Promise(promise);
}

module.exports = countStudents;
