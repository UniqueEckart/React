const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = 8000

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStauts: 200
}

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react'
})

app.use(bodyParser.json())
app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send("Not an actual Route!")
})

app.get('/users', (req, res) => {
    connection.query("SELECT * FROM users", function(err, rows, fields) {
        if (err) throw err;
        res.send(JSON.stringify(rows))
    })
})

app.post('/update-user', (req, res) => {
    connection.query('UPDATE `users` SET `name` = ?, `group` = ? WHERE `name` = ?;', [req.body.user.user, req.body.user.group, req.body.user.initialUser], (error, results, fields) => {
        if (error) {
            return console.error(error.message)
        }
    })
    res.sendStatus(200)
})

app.get('/cost', (req, res) => {
    connection.query('SELECT * FROM cost_centers', function(err, rows, fields){
        if (err) return res.sendStatus(404);
        res.send(JSON.stringify(rows))
    })
})

app.post('/update-cost', (req, res) => {
    connection.query('UPDATE `users` SET `user_cost` = ? WHERE `id` = ?', [req.body.id, req.body.user_id], (error, results, fields) => {
        if (error) {
            return console.error(error.message)
        }
    })
    res.sendStatus(200)
})

app.get('/documents', (req, res) => {
    connection.query('SELECT * FROM documents', function(err, rows, fields){
        if (err) return res.sendStatus(404);
        res.send(JSON.stringify(rows))
    })
})

app.get('/users/:id', (req, res) => {
    connection.query(`SELECT * FROM users WHERE id = ${req.params.id} LIMIT 1`, function(err, rows, fields){
        if (err) return res.sendStatus(404);
        res.send(rows[0])
    })
})

app.post('/delete-user', (req, res) => {
    connection.query(`DELETE FROM users WHERE name = '${req.body.name}';`)
    res.sendStatus(200)
})

app.post('/add-user', (req, res) => {
    connection.query(`INSERT INTO users VALUES('${req.body.name}', '${req.body.group}');`)
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})