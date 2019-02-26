// server.js
const express = require('express');
const app = express();
const path = require('path');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname));
// Start the app by listening on the default
// Heroku port
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, index.html));
});
app.listen(process.env.PORT || 8080);
console.log('Listening on localhost: 8080');
