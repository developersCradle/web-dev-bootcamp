const express = require("express");

const app = express();



app.listen(3000, (req, res) => {
    console.log("Listening on port 3000!");
})

 
// app.use((req, res) => {
//     console.log(req);
//     console.log("We got new request");
//     res.send("Hello we got your request")
// })


app.get('/cats', (req, res) => {
    console.log("CAT REQUEST!!!")
});

app.post('/cats', (req, res) => {
    console.log("CAT REQUEST!!!")
});


app.get('/dogs', (req, res) => {
    console.log("WOOF!!!")
});

app.get('/', (req, res) => {
    res.send("Root route");
})


//Matching pattern
app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    //destructure
    const { subreddit } = req.params;

    res.send(`<h1> Browsing the ${subreddit} </h1>`);
});

//Matching pattern
app.get('/r/:subreddit/:postId', (req, res) => {
    //destructure
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} </h1>`);
});


app.get('/search', (req, res) => {
    console.log(req.query);
    const { q } = req.query;
    
    res.send("HI");
})

app.get('*', (req, res) => {
    res.send("ALL othres");
});

