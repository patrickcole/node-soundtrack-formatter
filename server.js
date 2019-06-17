const express = require('express');
const path = require('path');
const app = express();

app.post('/format', (req,res) => {
  res.send('Formatted content');
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'static')));

const port = process.env.port || 5000;
app.listen( port, () => console.log(`The Express application is running and reporting on port ${port}`));