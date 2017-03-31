const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const spotify = {};

spotify.fetchPlaylist = (req, res, next) => {

  console.log("*inside of fetch playlist in spotify middleware*");

  var spotifyApi = new SpotifyWebApi({
    clientId: '54bedf22a6d14ef7bd7b63ed0c039ee2',
    clientSecret: 'adde660ddced4de5acb268bd5f2d93ad',
    redirectUri: 'http://www.example.com/callback'
  });
  // spotifyApi.setAccessToken('<your_access_token>');


  spotifyApi.getUser('126927037')
    .then(function (data) {
      console.log('Some information about this user', data.body);
    }, function (err) {
      console.log('Something went wrong!', err);
    });

  next();
}

// credentials are optional


module.exports = spotify;