const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, './dist/')));

app.get('/', spotify.fetchPlaylist, (req, res, next) => {

  console.log("*triggering get from Spotify*");
  
  res.status(200).json({ username: res.locals.username, samples: res.locals.samples });
});

// app.post('/login', userController.verifyUser, (req, res, next) => {

//   console.log("*fetched the user*"+res.locals.username);
//   // redirect to profile page of the user
//   res.status(200).json({ username: res.locals.username, samples: res.locals.samples });
// });

app.listen(3000);