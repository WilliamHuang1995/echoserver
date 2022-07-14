const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 80

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) =>
  {
    console.table(req)
    res.send("ok")
  }
  )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))