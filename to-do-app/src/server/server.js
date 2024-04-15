const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get('./users', (req, res) => {
    console.log('ddawdad')
    res.send('hi')
})


app.listen(3000)