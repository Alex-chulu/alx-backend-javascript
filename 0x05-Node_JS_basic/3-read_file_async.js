const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');

      const fields = {};
      lines.forEach(line => {
        const student = line.split(',');
        const field = student[3];
        if (field) {
          if (!fields[field]) fields[field] = [];
          fields[field].push(student[0]);
        }
      });

      const totalStudents = lines.length - 1; // Subtract 1 to exclude the header line
      const result = [`Number of students: ${totalStudents}`];

      Object.keys(fields).forEach(field => {
        result.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      });

      console.log(result.join('\n'));
      resolve(result.join('\n'));
    });
  });
}

module.exports = countStudents;

