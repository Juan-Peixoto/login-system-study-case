const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const projectFolder = __dirname

app.use(express.static(path.join(projectFolder, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(projectFolder, "views", "login.html"))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(projectFolder, "views", "signup.html"))
})

app.listen(port, () => {
    console.log(`Server running at http://localhost${port}/`)
})