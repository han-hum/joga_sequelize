const express = require('express');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to sequelize application" });
});

app.listen(3001, () => {
    console.log('App is started at http://localhost:3001')
})