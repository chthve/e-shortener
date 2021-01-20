const express = require('express');
const path = require('path');
const { redirectClient } = require('./controllers/redirect.ctrl');
const { postURL, postInfoURL } = require('./controllers/url.ctrl');

const router = express.Router();

router.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

router.get('/:code', redirectClient);
router.post('/info', postInfoURL);
router.post('/shorten', postURL);

module.exports = router;
