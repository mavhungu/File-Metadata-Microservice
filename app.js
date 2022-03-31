require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const multer  = require('multer');

const upload = multer({ dest: 'uploads/' });
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse',upload.single('upfile'), (req, res) => {
  try {
    const { originalname, mimetype, size } = req.file;

    res.json({ name: originalname, type: mimetype, size });
  } catch (err) {
    res.send(err.message)
  }
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});