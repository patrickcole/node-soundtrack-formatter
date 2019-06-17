const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/format', (req,res) => {

  let input = req.body;

  let message = { response_back: `${input.content} received and we say hello back` };

  res.json(message);
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'static')));

const port = process.env.port || 5000;
app.listen( port, () => console.log(`The Express application is running and reporting on port ${port}`));