const express = require('express');
const app = express();

// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
});

app.post('/tacos', (req, res) => {
    const {meat, qty} = req.body;
    res.send("POST /tacos response")
});

app.listen(3000, () => {
    console.log("LISTENINT ON PORT 3000");
})

