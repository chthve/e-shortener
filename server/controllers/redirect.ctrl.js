const Url = require('../models/url');

// eslint-disable-next-line consistent-return
exports.redirectClient = async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      await Url.updateOne(url, {
        $push: { clickCounter: Date.now() },
      });
      return res.redirect(url.longUrl);
    }
    return res.status(404).json('No url found');
  } catch (error) {
    console.error(error.message); //eslint-disable-line
    res.status(500).json('Server error');
  }
};
