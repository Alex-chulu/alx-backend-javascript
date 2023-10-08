const express = require('express');
const countStd = require('./3-read_file_async');
const fs = require('fs');

const app = express();
app.get('/', (req, res) => res.send('Hello Holberton School!'));
app.get('/students', async (req, res) => {
  const title = 'This is the list of our students\n';
  try {
    const data = await countStd(process.argv[2]);
    res.send(`${title}${data.join('\n')}`);
  } catch (error) {
    res.send(`${title}${error.message}`);
  }
});
app.listen(1245);
module.exports = app;
