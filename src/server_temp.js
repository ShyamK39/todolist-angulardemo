const express = require('express');
const path = require('path');

const app = express();

//

// NOTE: redirect to 'public' for react
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/todolist'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on ' + PORT));
