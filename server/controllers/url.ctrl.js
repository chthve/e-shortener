/* eslint-disable no-console */
const validUrl = require('valid-url');
const { nanoid } = require('nanoid');
const Url = require('../models/url');

const baseUrl = 'http://localhost:3001';

exports.getURL = async (req, res) => {
  try {
    const { url } = req.body;
    const resUrl = await Url.findOne({ url });
    res.send(resUrl);
  } catch (error) {
    console.error(error);
    res.status(401).send('Invalid long url');
  }
};

// eslint-disable-next-line consistent-return
exports.postURL = async (req, res) => {
  const { longUrl, code } = req.body;

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).send('Invalid base url');
  }

  const urlCode = nanoid(6);

  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });
      if (url) {
        res.send(url);
      } else if (code) {
        const checkUrl = await Url.findOne({ urlCode: code });
        if (!checkUrl) {
          const shortUrl = `${baseUrl}/${code}`;
          url = new Url({
            longUrl,
            shortUrl,
            urlCode: code,
            date: new Date(),
          });
          await url.save();
          res.send(url);
        } else {
          res.send('Sorry this url already exist!');
        }
      } else {
        const shortUrl = `${baseUrl}/${urlCode}`;
        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();
        res.send(url);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  } else {
    res.status(401).send('Invalid long url');
  }
};
