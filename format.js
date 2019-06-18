const DOMParser = require('xmldom').DOMParser;

module.exports = {
  formatDuration: function(input) {
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
  },
  formatTracks: function(input, duration) {
    
    // TODO: Currently set as a constant for which Text node
    // to use. It is set to use the first one, but if there
    // are others it might skew results.

    // Need to figure out how to customize this with template
    // or regex.
    const TITLE_INDEX = 0;

    // establish the number of seconds we have to work with
    // in calcuation of duration
    let currentDurationInSeconds = duration;

    // create an array to hold the tracks:
    let tracks = [];

    // start going through lines of input:
    let lines = input.split(`\n`);

    // reverse the lines so that we can subtract each duration from the current
    // duration, this is so that the last track will end at the total duration:
    let linesReversed = lines.reverse();

    // begin going through each line and obtaining the critical information:
    for ( let line_index = 0; line_index < linesReversed.length; line_index++ ){

      let html = linesReversed[line_index];

      // due to DOMParser not picking up Text nodes before actual nodes
      // append an empty <meta> node:
      html = `<meta />${html}`;

      // apply the formatting to both title(s) and timestamp
      let titles = formatTitle(html);
      let timestamp = formatTimestamp(html);

      if ( titles.length > 0 && timestamp > -1 ) {

        let track_duration = parseInt(currentDurationInSeconds - timestamp);
        currentDurationInSeconds = timestamp;
        tracks.push( { title: titles[TITLE_INDEX], startAt: timestamp, duration: track_duration } );
      }
    }

    // reverse the tracks back so they appear in proper order:
    tracks = tracks.reverse();

    return tracks;
  }
}


// UTILITY FUNCTIONS ------------------

function formatTitle(input) {

  let title = [];
  let dom = new DOMParser().parseFromString(input, 'text/html');

  if ( dom.hasChildNodes() ) {
    let dom_children = dom.childNodes;
    for ( let child_index = 0; child_index < dom_children.length; child_index++ ) {

      let child = dom_children[child_index];
      if ( child.nodeType === 3 ) {

        // TODO: Determine how to split via custom controls
        // right now this is set to always trim anything before
        // and including the dash.

        // However, not every input will have this template
        // so the code should be flexible enough to switch
        // to a different lookup/template.
        let titleValueRaw = child.nodeValue.trim();
        //let titleValue = titleValueRaw.split(/-(.+)/);

        title.push( titleValueRaw );
      }
    }
  }
  return title;
}

function formatTimestamp(input) {
  let timestamp = -1;
  let dom = new DOMParser().parseFromString(input, 'text/html');
  let elements = dom.getElementsByTagName('a');
  if ( elements.length < 1 ){
    return timestamp;
  } else {
    let href = elements[0].getAttribute('href');
    let query = '&t=';
    let timestampStartIndex = href.indexOf(query);
    let timestampEndIndex = href.lastIndexOf('s');
    
    timestamp = href.substring((timestampStartIndex + query.length), timestampEndIndex);

    if ( timestamp == '' ) {
      return -1;
    } else {
      return parseInt(timestamp);
    }
  }
}
