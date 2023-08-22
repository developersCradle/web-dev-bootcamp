const express = require('express');
const app = express();
const { v4 : uuid } = require('uuid');

//UUID come with different pieces, we are intrested in v4
// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json());


app.set('view engine', 'ejs');

const comments = [
    {
        id :  uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id :  uuid(),
        username: 'Tollo',
        comment: 'lol that is so stupid!'
    },
    {
        id :  uuid(),
        username: 'Erkki',
        comment: 'lol that is so Erkki!'
    },
]

app.get('/comments', (request, response) => {
    response.render('comments/index', { comments }); //Passing comment object to render
})

app.post('/comments', (request, response) => {
    const {username, comment } = request.body;
    comments.push({username, comment, id : uuid() })
    response.redirect('/comments'); // default GET, redirect

})

app.get('/comments/new', (request, response) => { // To get form, POST to save the form
    response.render('comments/new');
})

app.get('/comments/:id', (request, response) => {
    const { id } = request.params;
    const comment = comments.find(c => c.id === id);
    response.render('comments/show', { comment });
})

app.patch('/comment/:id', (request, response) => {
    const { id } = req.body;
    const newCommnetText = req.body.comment; // Something form payload
    const foundCommment = commnet.find(c => c.id === id);
    foundCommment.comment = newCommnetText;
    // We don't wana answer from content of patch route
    response.redirect('/comments')
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
});

app.post('/tacos', (req, res) => {
    const {meat, 
        qty} = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`);
});

app.post('/comments/:id/edit', (request, response) => {
    const { id } = req.body;
    const comment = comments.find(c => c.id === id);
    response.render('comments/edit', { comment })
})


app.listen(3000, () => {
    console.log("LISTENINT ON PORT 3000");
})

