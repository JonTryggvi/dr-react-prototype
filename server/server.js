const express = require('express')
const app = express()
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database(__dirname + '/db.db')
const port = 1981

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, x-access-token');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next()
}); 

app.get('/api/trailer/:id', function (req, res) {
  try {
    const trailerId = req.params.id 
    const stmt = 'SELECT url FROM content WHERE id = ?'
    db.all(stmt, trailerId, function (err, jRow) {
      if (err) {
        console.log('Could not get trailer from database -> ' + err)
        return res.send.send(err)
      }
      return res.json(jRow)
    })

  } catch (error) {
    // console.log('Could not get trailer from database -> ' + error.message)
    res.send('<p>Could not get /trailer/id from server -> ' + error.message + '</p>')
    
  }
})

app.listen(port, function (err) {
  if (err) {
    console.log('could not connect to this server: ' + err)
    return 
  }
  console.log('Server is running on port ' + port)
  
})