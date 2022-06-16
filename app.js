const express = require('express')
const path = require('path')
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
const Handlebars = require('handlebars')

const app = express()


//Handlebars
app.engine('.hbs', engine({defaltLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Body-parser (get form data)
app.use(bodyParser.urlencoded({extended: false}))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/marketplace', (req, res) => {
    res.render("marketplace", {layout: 'marketplace'})
})

app.get('/marketplace/items-details', (req, res) => {
    res.render("items-details", {layout: 'marketplace'})
})


app.get('/airdrop', (req, res) => {
    res.render("airdrop")
})

const PORT = process.env.PORT || 5050

app.listen(PORT, console.log(`Server started on ${PORT}`))