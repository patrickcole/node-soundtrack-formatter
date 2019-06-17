const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/format', (req,res) => {

  let input = req.body;

  // handle duration of album:
  let duration_formatted = input.duration;
  duration_formatted = duration_formatted.split(":");

  let hours = parseInt(duration_formatted[0]);
  let minutes = parseInt(duration_formatted[1]);
  let seconds = parseInt(duration_formatted[2]);

  let totalHoursInSeconds = ((hours * 60) * 60);
  let totalMinutesInSeconds = minutes * 60;
  let totalDurationInSeconds = totalHoursInSeconds + totalMinutesInSeconds + seconds;

  // establish album properties:
  let tracks = [];
  let prevValueSeconds = totalDurationInSeconds;

  // start going through lines of input:
  let lines = input.content.split(`\n`);

  // reverse the lines so that we can subtrack each duration from the end
  // duration, this is so that the last track will end at the total duration:
  let linesReversed = lines.reverse();
  for ( let index = 0; index < linesReversed.length; index++ ){

    let thisLine = linesReversed[index];
  
    let tagStartIndex = thisLine.indexOf(' <a class');
    let title = thisLine.substr(0, tagStartIndex);
  
    let query = '&t=';
    let timeStartIndex = thisLine.indexOf(query);
    let startAt = thisLine.substr((timeStartIndex + query.length), thisLine.length);
    let startAtSeconds = startAt.substr(0, startAt.indexOf('s">'));

    if ( title !== '' && startAtSeconds !== '' ){
  
      // a little regex help from:
      // https://stackoverflow.com/a/4607799:
      let trackInfo = title.split(/-(.+)/);

      let duration = parseInt(prevValueSeconds - startAtSeconds);
      prevValueSeconds = startAtSeconds;
  
      tracks.push({ title: trackInfo[1], playAt: startAtSeconds, duration: duration });
    }
  }

  let reversedNewTracks = tracks.reverse();

  let message = { tracks: reversedNewTracks };
  res.json(message);
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'static')));

const port = process.env.port || 5000;
app.listen( port, () => console.log(`The Express application is running and reporting on port ${port}`));