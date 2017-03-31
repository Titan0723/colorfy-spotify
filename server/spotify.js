const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const spotify = {};

spotify.fetchPlaylist = (req, res, next) => {

  console.log("*inside of fetch playlist in spotify middleware*");

  var spotifyApi = new SpotifyWebApi({
    clientId: 'fcecfc72172e4cd267473117a17cbd4d',
    clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
    redirectUri: 'http://www.example.com/callback'
  });

  next();

}

// credentials are optional


module.exports = spotify;