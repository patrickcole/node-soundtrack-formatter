const formatter = require('../utils/format');

let video_duration = `PT59M16S`;
let video_duration_readable = formatter.formatDuration(video_duration);
let video_duration_in_seconds = formatter.formatTimestamp(video_duration_readable);

console.log(video_duration_readable);
console.log(video_duration_in_seconds);
console.log("=================");

let currentDurationInSeconds = video_duration_in_seconds;


let input =`track #1  00:00-05:35\ntrack #2  05:35-10:56\ntrack #3  10:56-16:20\ntrack #4  16:20-21:35\ntrack #5  21:35-26:54\ntrack #6  26:54-32:07\ntrack #7  32:07-34:30\ntrack #8  34:30-37:36\ntrack #9  37:36-38:00\ntrack #10  38:00-38:14\ntrack #11  38:14-40:54\ntrack #12  40:54-43:32\ntrack #13  43:32-48:42\ntrack #14  48:42-53:19\ntrack #15  53:19-58:18\ntrack #16  58:18-59:16`;

let tracks = [];

let lines = input.split(`\n`);
lines = lines.reverse();

for ( let i = 0; i < lines.length; i++ ) {

  let line = lines[i];
  let digitsFollowedByColon = /\d{1,2}[\:]\d{1,2}/g.exec(line);
  let alphaChars = /[a-zA-Z]/.exec(line);

  if ( digitsFollowedByColon && alphaChars ){

    let isTimeBeforeTitle;
    let title;
    let time;

    //console.log(digitsFollowedByColon[0].length);

    digitsFollowedByColon.index < alphaChars.index ? isTimeBeforeTitle = true : isTimeBeforeTitle = false;

    //console.log(`isTimeBeforeTitle: ${isTimeBeforeTitle}`);

    // filter the title:
    if ( isTimeBeforeTitle ) {
      title = line.substring(alphaChars.index);
      time = line.substring(digitsFollowedByColon.index, alphaChars.index);
    } else {
      title = line.substring(alphaChars.index, digitsFollowedByColon.index);
      time = line.substr(digitsFollowedByColon.index, digitsFollowedByColon[0].length);
    }

    //console.log(title);

    // trim whitespace from title:
    title = title.trim();


    // filter out any ms in the time string:
    let time_filterOutMS = time.split('.');
    let time_values = time_filterOutMS[0];

    let trackTimestampInSeconds = formatter.formatTimestamp(time_values)
    let track_duration = currentDurationInSeconds - trackTimestampInSeconds;

    currentDurationInSeconds = trackTimestampInSeconds;

    tracks.push({ title: title, duration: track_duration });
  }
}

tracks = tracks.reverse();

console.log(tracks);
