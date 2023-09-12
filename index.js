// index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello world, Express! nice');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
