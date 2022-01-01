const mongoose = require("mongoose");


// Creating a Database

mongoose.connect("mongodb://localhost:27017/roomautomation", {
    
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
});