// public so that the formatTracks method can access it:
function utilityTimestamp( input ) {
  let duration_formatted = input.split(":");

  let seconds, minutes, hours = 0;

  // reverse the values as the hours may not always be the first
  // by reversing, we can ensure that the conversion will be done
  // in order of seconds, minutes then hours

  // For example: 0:08 = 8 seconds NOT 8 minutes
  duration_formatted = duration_formatted.reverse();

  if ( duration_formatted.length > 0 )
    seconds = parseInt(duration_formatted[0]);

  if ( duration_formatted.length > 1 )
    minutes = parseInt(duration_formatted[1]);

  if ( duration_formatted.length > 2 )
    hours = parseInt(duration_formatted[2]);
  
  let totalHoursInSeconds = ((hours * 60) * 60);
  let totalMinutesInSeconds = minutes * 60;
  let totalDurationInSeconds = totalHoursInSeconds + totalMinutesInSeconds + seconds;

  return totalDurationInSeconds;
}

module.exports = {
  formatDuration: function(input) {

    let filters = [
      { lookFor: 'PT', replaceWith: ''},
      { lookFor: 'H', replaceWith: ':'},
      { lookFor: 'M', replaceWith: ':'},
      { lookFor: 'S', replaceWith: ''}
    ];

    filters.map( (instruction) => {
      let thisRegEx = new RegExp(instruction.lookFor, "g");
      input = input.replace(thisRegEx, instruction.replaceWith);
    })
  
    return input;
  },
  formatTimestamp: utilityTimestamp,
  formatTracks: function(input, duration) {
    
    let currentDurationInSeconds = duration;
    let tracks = [];
    let lines = input.split(`\n`);
    lines = lines.reverse();

    for ( let i = 0; i < lines.length; i++ ) {

      let line = lines[i];
      let digitsFollowedByColon = /\d{1,2}[\:]/.exec(line);
      let alphaChars = /[a-zA-Z]/.exec(line);

      if ( digitsFollowedByColon && alphaChars ) {

        let isTimeBeforeTitle;
        let title;
        let time;
    
        digitsFollowedByColon.index < alphaChars.index ? isTimeBeforeTitle = true : isTimeBeforeTitle = false;

        // filter the title:
        if ( isTimeBeforeTitle ) {
          title = line.substring(alphaChars.index);
          time = line.substring(digitsFollowedByColon.index, alphaChars.index);
        } else {
          title = line.substring(alphaChars.index, digitsFollowedByColon.index);
          time = line.substring(digitsFollowedByColon.index);
        }
    
        // filter out any ms in the time string:
        let time_filterOutMS = time.split('.');
        let time_values = time_filterOutMS[0];

        let trackTimestampInSeconds = utilityTimestamp(time_values);
        let track_duration = currentDurationInSeconds - trackTimestampInSeconds;

        currentDurationInSeconds = trackTimestampInSeconds;

        tracks.push( { title: title, startAt: trackTimestampInSeconds, duration: track_duration } );
      }
    }

    tracks = tracks.reverse();

    return tracks;
  }
}
