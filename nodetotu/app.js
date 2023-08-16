const express = require('express')
const { logger } = require('./middlewrea/logger.js')
const { authorize } = require('./middlewrea/authorize.js')
const morgan = require('morgan')
let { people } = require('./data.js')
const app = express()

// Use Morgan as Middleware
app.use(morgan('tiny'))

// Serve static files
app.use(express.static('./publicFiles'))

// Parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Apply middleware to all routes
// app.use([logger, authorize])

// Root route
app.get('/', logger, (req, res) => {
  // Your logic here
})

// Login route
app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    res.status(200).send(`Welcome ${name}`)
  } else {
    res.status(400).send(`Please provide a correct name`)
  }
})

// GET route for /api/people
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

// POST route for /api/people
app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (name) {
  
    res.status(201).json({ success: true, person: name })
  }
  return res.status(400).json({ success: false, msg: 'Please provide name value' })
})

// User route
app.get('/user', authorize, (req, res) => {
  res.status(200).send("Welcome John")
})

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body
   console.log(id,name)
   console.log("hello world")
  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
