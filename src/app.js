
const express = require("express");
const path = require("path");
const roomrouter = require("./router/roomrouter")
const bodyParser = require("body-parser");
require("./db/conn");
require("./model/room");
require("./model/device");

const app = express();
const port = process.env.PORT || 8000;




app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// middleware
app.use("/room",roomrouter);
const staticpath = path.join(__dirname, "../public");
app.use(express.static(staticpath));


// routing

app.post("/roomgallery", (req, res) => {
    res.send("hello from the other side");
})

app.get("/", (req,res) => {
    res.render("index");
});

app.get("/about", (req, res) => { 
    res.render("about");
})


// Creating a Server

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});