const express = require('express');
const fs = require('fs');
const app = express();
const port = 1245;

// Middleware to handle plain text responses
app.use(express.text());

// Handle requests to the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Handle requests to the "/students" URL
app.get('/students', (req, res) => {
  // Read the CSV file asynchronously
  fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Cannot load the database\n');
    }

    // Split the CSV data into lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Prepare the response as plain text
    let responseText = 'This is the list of our students\n';
    responseText += lines.join('\n') + '\n';

    res.send(responseText);
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the Express app
module.exports = app;

