const mongoose = require("mongoose");
const validator = require("validator");

// crearte a schema

const deviceSchema = new mongoose.Schema({
    deviceid: {
        type: String,
    },

    devicename: {
        type: String,
    }
      
})
const Device = new mongoose.model("device", deviceSchema);

module.exports = Device;
