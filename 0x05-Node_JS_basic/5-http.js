const http = require('http');
const { readDB } = require('./3-read_file_async');

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    try {
      const data = await readDB(process.argv[2]);
      const lines = data.toString().split('\n').filter(Boolean);
      const fields = lines.shift().split(',');

      if (fields.length !== 4 || !fields.includes('firstname') || !fields.includes('lastname') || !fields.includes('age') || !fields.includes('field')) {
        res.end('Invalid data format in the database\n');
        return;
      }

      const students = {};
      const numStudents = {};

      lines.forEach((line) => {
        const [firstname, lastname, age, field] = line.split(',').map((item) => item.trim());

        if (field in students) {
          students[field].push(firstname);
        } else {
          students[field] = [firstname];
        }

        if (field in numStudents) {
          numStudents[field] += 1;
        } else {
          numStudents[field] = 1;
        }
      });

      res.write('This is the list of our students\n');
      res.write(`Number of students: ${lines.length}\n`);

      Object.entries(numStudents).forEach(([field, count]) => {
        res.write(`Number of students in ${field}: ${count}. List: ${students[field].join(', ')}\n`);
      });

      res.end();
    } catch (err) {
      res.end('Cannot load the database\n');
    }
  } else {
    res.end('Not Found\n');
  }
});

app.listen(1245, 'localhost');

module.exports = app;

