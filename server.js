const express = require("express");
const os = require("os");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Hello Kubernetes!</h1>
        <p>Served from pod:</p>
        <h2>${os.hostname()}</h2>
    `);
});

app.post("/register", (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    console.log(`Registering user: ${firstName} ${lastName}`);
    // save data to postgress database
    res.send("User registered successfully");
});

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});