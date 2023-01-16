const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let count = 0;

app.get('/count', (req, res) => {
  res.send({ count });
});

app.post('/count', (req, res) => {
  console.log('POST /count')
  count++;
  res.send({ count });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
