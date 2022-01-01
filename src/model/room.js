const mongoose = require("mongoose");
const validator = require("validator");

// crearte a schema

const deviceSchema = new mongoose.Schema({
    roomid: {
        type: String,
    },

    roomname: {
        type: String,
    },
    
    devicelist: {
        type: Array,
    }
      
})

const Room = new mongoose.model("Room", deviceSchema);

module.exports = Room;
