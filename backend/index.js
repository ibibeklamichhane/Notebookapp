const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')


connectToMongo();
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

//available routes
app.get('/',(req,res) => res.status(200).json({message:'Hello World'}))
app.use ('/api/auth',require('./routes/auth'))
app.use ('/api/notes',require('./routes/notes'))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

