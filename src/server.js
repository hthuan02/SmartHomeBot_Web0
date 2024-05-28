require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//ejs
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'ejs')

//Kiểm tra env
//console.log(">>> check env : ", process.env)

//Static files(img,js,css)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello ')
})

app.get('/abc', (req, res) => {
    res.send('ABC')
})

app.get('/hmt', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})