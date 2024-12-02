const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let buttonPressCounts = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0,
    '0': 0,
    '+': 0,
    '-': 0,
    '*': 0,
    '/': 0,
    '=': 0,
    'C': 0,
    'CE': 0,
    'Del': 0,
    '%': 0,
    '1/x': 0,
    'x²': 0,
    '√': 0,
    '±': 0,
    '.': 0
};

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/button-press', (req, res) => {
    const { button } = req.body;
    if (buttonPressCounts.hasOwnProperty(button)) {
        buttonPressCounts[button]++;
    }
    res.json(buttonPressCounts);
});

app.get('/button-press-counts', (req, res) => {
    res.json(buttonPressCounts);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});