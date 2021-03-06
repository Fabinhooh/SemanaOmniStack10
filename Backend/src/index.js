const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-k7ei5.mongodb.net/week10', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
