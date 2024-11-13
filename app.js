
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve HTML files and static assets (like CSS and JS)
app.use(express.static(__dirname));

// Serve the Contact page
app.get('/contactinfo.html', (req, res) => {
  res.sendFile(__dirname + '/contactinfo.html');
});

// Handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, message } = req.body;
  console.log(`got a new message from ${name}: ${message}`);
  res.send(`Thank you, ${name}! Your message has been received.`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});