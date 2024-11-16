const express = require('express'); 
const app = express();
const port = 3000; // port address

app.use(express.urlencoded({ extended: true })); // This makes sure the server can read data sent from forms when a user submits them.
app.use(express.static(__dirname)); // This lets the server send files to the browser.

app.get('/contactinfo.html', (req, res) => {                // the Contact page
  res.sendFile(__dirname + '/contactinfo.html');   // When someone visits this page, the server sends back the HTML file 
});
app.post('/submit-form', (req, res) => {   // Handle form submissions
  const { name, message } = req.body;   // Gets the user's name and message from the form they submitted.
   res.send(`Thank you, ${name}! Your message has been received.`);    // Sends a "thank you" message back to the user after they submit the form.
});
app.listen(port, () => {  // Start the server
  console.log(`Server running on http://localhost:${port}`);     // Starts the server so users can open the site in their browser at this address.
});
