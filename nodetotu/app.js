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
app.post('/api/people', authorize, (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: 'Please provide name value' })
  }
  res.status(201).json({ success: true, people: name })
})

// User route
app.get('/user', authorize, (req, res) => {
  res.status(200).send("Welcome John")
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
