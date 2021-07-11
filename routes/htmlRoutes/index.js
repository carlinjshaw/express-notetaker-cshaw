//uses path npm module
const path = require('path');
//uses npm router module
const router = require('express').Router();

//if a user requests "/notes" then take them to the static file notes.html 
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//asteric catches all other weird routes, and sends to the index file. MAkes user freindly
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
