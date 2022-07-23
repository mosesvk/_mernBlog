
import express from 'express';
import bodyParser from 'body-parser'

const articlesInfo = {
  'learn-react': {
    upvotes: 0
  },
  'learn-node': {
    upvotes: 0
  },
  'my-thoughts-on-resumes': {
    upvotes: 0
  }
}

const app = express()

app.use(bodyParser.json()) 
  // this will parse the json object that will be sent via POST requests
  // adds a 'body' property to the 'req' parameter from whatever route
  // we can access through 'req.body' 

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name

  articlesInfo[articleName].upvotes += 1
  res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`)
})

app.listen(5555, () => console.log('Listening on Port 5555'))

