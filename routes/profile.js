const express = require('express');
const router = express.Router();

//github
const request = require('request');
const config = require('config');

router.get('/profile', (req, res) => {
  try {
    const options = {
      uri: `https://api.github.com/users/Mopheta/repos?per_page=5&sort=created:asc&client_id=${config.get(
        'githubClientId'
      )}
        &client_secret=${config.get('githubSecret')}`,
      method: 'GET',
      headers: { 'user-agent': 'node.js' },
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);

      if (response.statusCode !== 200) {
        return res.status(404).json({ msg: 'Github user not found' });
      }

      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
