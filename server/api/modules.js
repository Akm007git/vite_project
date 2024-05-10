
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        unique: true,
        type: String
    },
    password: String
});

module.exports = mongoose.model("user", userSchema);

