// express import
const express = require('express')
// express initialization
const app = express()
const PORT = 3000

const cors = require("cors");
const rateLimit = require('express-rate-limit');
// const rateLimiter = require("./rateLimitter");

// Create the rate limit rule
const apiRequestLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 10, // limit each IP to 10 requests per windowMs
    message: "Your limit exceeded",
    headers: true
})

app.use(cors());
// Use the limit rule as an application middleware
app.use(apiRequestLimiter)
// app.use(rateLimiter);

// generic GET route that we will use for the tests
app.get('/', function (req, res) {
  return res.send('Hello World')
})


// server initialization 
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})