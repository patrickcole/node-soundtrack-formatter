const DOMParser = require('xmldom').DOMParser;




// TODO: Add multiline parser










let html = `*I do not own the rights to the music.`;

// due to DOMParser not picking up Text nodes before actual nodes
// append an empty <meta> node:
html = `<meta />${html}`;

// apply the formatting to both title(s) and timestamp

let titles = formatTitle(html);
let timestamp = formatTimestamp(html);

console.log(titles);
console.log(timestamp);
console.log("----------");

//let track = { title: formatTitle(html), playAt: formatTimestamp(html) };
//console.log( track );

function formatTitle(input) {

  let title = [];
  let dom = new DOMParser().parseFromString(input, 'text/html');

  if ( dom.hasChildNodes() ) {
    let dom_children = dom.childNodes;
    for ( let child_index = 0; child_index < dom_children.length; child_index++ ) {

      let child = dom_children[child_index];
      if ( child.nodeType === 3 ) {
        title.push( child.nodeValue.trim() );
      }
    }
  }
  return title;
}

function formatTimestamp(input) {
  let timestamp = -1;
  let dom = new DOMParser().parseFromString(input, 'text/html');

  //console.log(dom);

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
