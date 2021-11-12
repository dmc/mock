const express = require('express')
const PORT = process.env.PORT || 5000

const response = (param) => {
  return  {"changed": param}
} 

const error = (param) => {
  return  {"error": param}
} 

express()
.get("/", (req, res) =>{
  const response = {"endpoints": ["/bad","/forbidden","/notfound","/true","/false"]}
  res.json(response);
})
.get("/true", (req, res) =>{
  res.json(response("true"))
})
.get("/false", (req, res) =>{
  res.json(response("false"))
})
.get("/bad", (req, res) =>{
  res.status(400).json(error("bad request"))
})
.get("/forbidden", (req, res) =>{
  res.status(403).json(error("forbidden"))
})
.get("/notfound", (req, res) =>{
  res.status(404).json(error("not found"))
})

.listen(PORT, () => console.log(`Listening on ${ PORT }`))
