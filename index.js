/**
 * url_shortener_microservice
 * index.js
 * Ashutosh
 * 02-02-2017
 */
var express = require('express');
var app = express();
// helper variables
var path = 1234;
var value;
var originalUrl;
// The only route
app.get('/new/*', function (req, res) {
   // if request is original_url
   if (req.path.indexOf('http://') !== -1) {
      // extract original_url
      originalUrl = req.originalUrl.slice(5);
   }
   // making route for short_url
   path = '/new/' + value;
   // generating a random number
   value =  Math.round(Math.random() * 10000);
   // check for the fork on the Road. If so, redirect to original_url
   if (value !== undefined && req.originalUrl === path) {
      res.redirect(originalUrl);
      res.end();
   }
   else {
   // preparing JSON Response
      var JSONResponse = {
         "original_url" : req.originalUrl,
         "short_url" : "https://ide50-bhardwajashu96.c9users.io/new/" + value
      };
      // sendid JSON Response
      res.end(JSON.stringify(JSONResponse));
   }
});
// listening on port 8080
app.listen(8080);