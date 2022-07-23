
import express from 'express';
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json()) 
  // this will parse the json object that will be sent via POST requests
  // adds a 'body' property to the 'req' parameter from whatever route
  // we can access through 'req.body' 

app.get('/hello', (req, res) => res.send('Hello'))
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`))

app.listen(5555, () => console.log('Listening on Port 5555'))

