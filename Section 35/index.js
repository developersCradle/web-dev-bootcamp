const express = require('express');
const app = express();

// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json());


app.set('view engine', 'ejs');

const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        username: 'Tollo',
        comment: 'lol that is so stupid!'
    },
    {
        username: 'Erkki',
        comment: 'lol that is so Erkki!'
    },
]

app.get('/comments', (request, response) => {
    response.render('comments/index', { comments }); //Passing comment object to render
})

app.post('/comments', (request, response) => {
    const {username, comment } = request.body;
    comments.push({username, comment})
    response.redirect('/comments'); // default GET, redirect

})

app.get('/comments/new', (request, response) => { // To get form, POST to save the form
    response.render('comments/new');
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
});

app.post('/tacos', (req, res) => {
    const {meat, qty} = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
    console.log("LISTENINT ON PORT 3000");
})

