const express = require('express');
const { redirectClient } = require('./controllers/redirect.ctrl');
const { postURL, postInfoURL } = require('./controllers/url.ctrl');

const router = express.Router();

router.get('/:code', redirectClient);
router.post('/info', postInfoURL);
router.post('/shorten', postURL);

module.exports = router;
