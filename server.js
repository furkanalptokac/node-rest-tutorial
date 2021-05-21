const express = require('express');
const app = express();

app.set('port', process.env.PORT || 5000);

app.get('/', (req, res) => {
    res.send('Hello, index!!!');
});

app.listen(app.get('port'), () => {
    console.log(`Server is listening on http://localhost:${app.get('port')}`);
});
