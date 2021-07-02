const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/localhost", { useNewUrlParser: true, useUnifiedTopology: true }, 
    (error) => error 
    ? console.log(err) 
    : console.log(`Connected to database with sucess!`)
);

app.use('/', require('./router/routes'));

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}.`))