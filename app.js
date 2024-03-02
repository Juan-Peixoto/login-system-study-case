const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const projectFolder = __dirname

app.use(express.static(path.join(projectFolder, 'public')))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("login")
})

app.get('/signup', (req, res) => {
    res.render("signup")
})

app.get('/home', (req, res) => {
    res.render("home")
})

app.listen(port, () => {
    console.log(`Server running at http://localhost${port}/`)
})