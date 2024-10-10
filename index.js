const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the db.');
    })
    .catch(err => {
        console.error('Unable to connect to the db.', err);
    });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to sequelize application" });
});

app.listen(3001, () => {
    console.log('App is started at http://localhost:3001')
})