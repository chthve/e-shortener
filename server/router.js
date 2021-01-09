const express = require('express');
const { redirectClient } = require('./controllers/redirect.ctrl');
const { getURL, postURL } = require('./controllers/url.ctrl');

const router = express.Router();

router.get('/:code', redirectClient);
router.get('/shorten', getURL);
router.post('/shorten', postURL);

module.exports = router;
