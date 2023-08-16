const express = require("express");

const app = express();



app.listen(3000, (req, res) => {
    console.log("Listening on port 3000!");
})

 
app.use((req, res) => {
    console.log(req);
    console.log("We got new request");
    res.send("Hello we got your request")
})
