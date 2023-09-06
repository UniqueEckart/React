const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = 8000

//var corsOptions = {
//    origin: 'http://localhost:3000',
//    optionsSuccessStauts: 200
//}

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react'
})

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Working")
})

app.get('/users', (req, res) => {
    connection.query("SELECT * FROM users", function(err, rows, fields) {
        if (err) throw err;
        res.send(JSON.stringify(rows))
    })
})

app.post('/update-user', (req, res) => {
    connection.query(`UPDATE users SET name = '${req.body.newName}' WHERE name = '${req.body.oldName}';`)
})

app.post('/delete-user', (req, res) => {
    connection.query(`DELETE FROM users WHERE name = '${req.body.name}';`)
    res.send("Success")
})

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})