const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const spotify = {};

spotify.fetchPlaylist = (req, res, next) => {
  // initialize collection to send to front-end
  console.log('*entering fetch play list function in spotify middleware*');
  var serverData = [];
  var spotifyApi = new SpotifyWebApi({
    clientId: '54bedf22a6d14ef7bd7b63ed0c039ee2',
    clientSecret: 'adde660ddced4de5acb268bd5f2d93ad',
    redirectUri: 'http://www.example.com/callback'
  });
  // get token from https://developer.spotify.com/web-api/console/get-playlist/
  // token expires every hour
  spotifyApi.setAccessToken('BQBMoqDOG4jSgOrI4uFT3UOjsS3JjVAGILPAIcQw-8nc4F2O6CSHBFuz6n9170ytvyQEnjc1J326sRe62_wHwm0ONneMVWMUJA27_8jeZle2Khglrl8Kaff_Te8BptpY65vJCewuQ_Uirletk1ogAkVuKgG1gYGUAwX_o6NaNa-FbDiZi30ZKlBEy0vuCPmocqsxAJhIyezWD57v1DeDg6XOWBX7kQwVDxQZyApp_-dNVozyZHE_RceuHjj4WFxQKfHNVv27Z_IAYr51MNGcKzj5Db8LmEX2m_-7Zjs9gD_2AtektjzeJw');
  // fetch playlist
  spotifyApi.getPlaylist('thefader', '32iM8mNTbXeWZ7GKl32Heg')
    .then(function (data) {
      console.log('Successfully fetched playlist');
      var songArr = data.body['tracks']['items'];
      // var tempSongIdArr = [];
      songArr.forEach(function (x) {
        // loop through each song in the playlist
        // add song IDs, name and artist to a array
        songObj = {};
        songObj['id'] = x['track']['id'];
        songObj['name'] = x['track']['name'];
        // console.log('*looping through each song*');
        // console.log(songObj['name']);
        songObj['artist'] = x['track']['artists'][0]['name'];
        // tempSongIdArr.push(x['track']['id']);
        spotifyApi.getAudioFeaturesForTracks(songObj['id'])
          .then(function (data) {
            // get metrics for songs in array
            // console.log("%%%%%");
            // console.log(songObj);
            songObj['danceability'] = data.body['danceability'];
            songObj['energy'] = data.body['energy'];
            songObj['key'] = data.body['key'];
            songObj['loudness'] = data.body['loudness'];
            songObj['mode'] = data.body['mode'];
            songObj['speechiness'] = data.body['speechiness'];
            songObj['acousticness'] = data.body['acousticness'];
            songObj['instrumentalness'] = data.body['instrumentalness'];
            songObj['liveness'] = data.body['liveness'];
            songObj['valence'] = data.body['valence'];
            songObj['tempo'] = data.body['tempo'];
            songObj['duration_ms'] = data.body['duration_ms'];
            songObj['time_signature'] = data.body['time_signature'];
            console.log("*****");
            console.log(songObj);
          })
          .catch((err) => {
            console.log(err);
          })
        serverData.push(songObj);
      });
      console.log("^^^^^");
      console.log(serverData);
      res.locals.serverData = serverData;
      return next();
      // });
    })
    .catch((err) => {
      res.status(500).send('Error occurred');
      console.log(err);
    })
}

module.exports = spotify;