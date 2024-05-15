const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/addTwoNumbers', function(req, res) {
    const n1 = req.query.n1;
    const n2 = req.query.n2;
    const result = parseInt(n1) + parseInt(n2);
    const response = { data: result, message: 'Success', statusCode: 200 };
    res.json(response);
});

app.listen(port, () => {
    console.log('Server running on port 3000');
});
