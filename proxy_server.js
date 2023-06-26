

const express = require('express');
const request = require('request');

const app = express();
const API_URL = 'https://api.sunflower-land.com/bumpkins/metadata/35919_v1_32_3_43_13_20_22_44' 
// Replace this URL with your own

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api', (req, res) => {
  request(
    { url: `${API_URL}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});
