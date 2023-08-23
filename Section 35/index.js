const express = require('express');
const app = express();
const methodOverride = require('method-override');
const { v4 : uuid } = require('uuid');

//UUID come with different pieces, we are intrested in v4
// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

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

app.post('/comments/:id/edit', (request, response) => {
    const { id } = request.body;
    const comment = comments.find(c => c.id === id);
    response.render('comments/edit', { comment })
})

app.get('/comments/:id/edit', (request, response) => {
    const { id } = request.params; //get is form params
    const comment = comments.find(c => c.id === id);
    response.render('comments/edit', { comment })
})


app.patch('/comments/:id', (request, response) => {
    const { id } = request.body;
    const newCommentText = request.body.comment; // Something form payload
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
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


app.listen(3000, () => {
    console.log("LISTENINT ON PORT 3000");
})

