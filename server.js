// node
const path = require('path');
const fs = require('fs');

// express
const express = require('express');
const bodyParser = require('body-parser');

// logging
const morgan = require('morgan');

// security
const helmet = require('helmet');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// api utils:
const slugify = require('slugify');

// setup
const app = express();
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'));

// custom utilities
const formatter = require('./utils/format');
const youtube = require('./utils/youtube');

// apply middleware
app.use(morgan('combined', { stream: accessLogStream }));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



function handleAPIData(item) {

  let video_duration = item.contentDetails.duration;
  let video_duration_readable = formatter.formatDuration(video_duration);
  let video_duration_in_seconds = formatter.formatTimestamp(video_duration_readable);

  let video_title = item.snippet.title;
  let video_description = item.snippet.description;
  let tracks = formatter.formatTracks( video_description, video_duration_in_seconds );

  let video_slug = slugify(video_title).toLowerCase();

  let message = { 
    title: video_title, slug: video_slug, embed: item.id, tracks: tracks, duration: video_duration_in_seconds };
  return { success: true, json: message };
}



const checkJwt = jwt(
  {
    secret: jwksRsa.expressJwtSecret(
      {
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-ul4-xznf.auth0.com/.well-known/jwks.json'
      }
    ),
    audience: 'https://node-soundtrack-formatter',
    issuer: 'https://dev-ul4-xznf.auth0.com/',
    algorithms: ['RS256']
  }
);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'static')));
app.use(checkJwt);
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ success: false, message: 'Invalid security token'});
  }
});

app.post('/video/:embed', (req,res) => {
  
  if ( req.params.embed !== "" ) {

    youtube(req.params.embed)
      .then( (item) => {

        // if a comment is preferred to the description
        // it will replace the description inside the item:
        if ( req.body.comment !== "" ){
          item.snippet.description = req.body.comment;
        }

        let payload = handleAPIData(item);
        res.json(payload);
      })
      .catch( (error) => {
        res.json( { success: false, message: error } );
      })
  } else {
    res.json({ success: false, message: "Please enter a valid video id" });
  }
});

const port = process.env.port || 3001;
app.listen( port, () => console.log(`The Express application is running and reporting on port ${port}`));