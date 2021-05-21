const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const connectDB = require('./config/db');

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./routes/routes'));

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
    console.log(`Server is listening on http://localhost:${app.get('port')}`);
});
