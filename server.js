const express = require('express');
//establishes our local port to 3001 OR the process environment choice of another host (like heroku)
const PORT = process.env.PORT || 3001;
const app = express();
//connect the routes in the html and api directories
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//i think this uses the static files that are in public directory
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
