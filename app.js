const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const projectFolder = __dirname

app.use(express.static(path.join(projectFolder, 'public')))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const pageTitle = 'Login page'
    res.render("login", {pageTitle})
})

app.get('/signup', (req, res) => {
    const pageTitle = 'Registration page'
    res.render("signup", {pageTitle})
})

app.get('/home', (req, res) => {
    const pageTitle = 'Home page'
    res.render("home", {pageTitle})
})

app.listen(port, () => {
    console.log(`Server running at http://localhost${port}/`)
})