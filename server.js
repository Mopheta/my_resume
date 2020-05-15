const express = require('express');

const path = require('path');

const app = express();

app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('API Running')); //para testear con postman

app.use('/', require('./routes/profile'));

//const PORT = 5000;

const staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.set('port', process.env.PORT || 5000);

//app.listen(PORT, () => console.log(`Kevin Server started in PORT: ${PORT}`));
const server = app.listen(app.get('port'), function () {
  console.log('listening kevin');
});
