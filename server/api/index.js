
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require("./api/modules.js")
require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



mongoose.connect(process.env.URL)
app.get("/", (req, res) => {
    res.send("Hello");
})


// home route
app.get("/", (req, res) => {
    res.send("hi");
}
)

app.post('/api/data', async (req, res) => {
    const data = await req.body;
    const { email, password, verifyPassword } = data;
    // res.send("successfully completed!");
    //console.log(email, password, verifyPassword);

    // * If user already exists
    const existingUser = await user.findOne({ email });

    if (existingUser) {
        console.log(existingUser)
        console.log("User already exists");
        res.send("User already exists");
    }
    else {
        const newUser = new user(
            {
                email,
                password,
                verifyPassword
            }
        );
        // saving the data
        res.send("new user saved successfully");
        await newUser.save();

    }


});

// saving the data user endpoint

app.post("/api/users", async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    const existUser = await user.findOne({ email, password });
    if (existUser) {
        res.send("Login Successfully");
    } else {
        res.send("Unknown user, Register first");
    }

});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

