

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const formatter = require('./utils/format');


const Prism = require('prismjs');
let loadLanguages = require('prismjs/components/');
loadLanguages(['json']);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/format', (req,res) => {

  let item = req.body.items[0];
  let video_duration = item.contentDetails.duration;
  let video_duration_readable = formatter.formatDuration(video_duration);
  let video_duration_in_seconds = formatter.formatTimestamp(video_duration_readable);

  let video_description = item.snippet.description;
  let tracks = formatter.formatTracks( video_description, video_duration_in_seconds );

  let message = { tracks: tracks, duration: video_duration_in_seconds };

  let html = Prism.highlight(JSON.stringify(message, undefined, 2), Prism.languages.json, 'json');

  let payload = { json: message, html: html };
  res.json(payload);
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'static')));

const port = process.env.port || 5000;
app.listen( port, () => console.log(`The Express application is running and reporting on port ${port}`));