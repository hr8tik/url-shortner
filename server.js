const express = require('express')
const mongoose = require('mongoose')
const ShortURL = require('./models/shortURL')
const app = express()

mongoose.connect('mongodb://localhost/urlShortner', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/shortURLs', (req,res) =>{
    ShortURL.create({full: req.body.fullURL})
})

app.listen(process.env.PORT || 5000);