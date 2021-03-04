const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config()
app.use(express.json())

app.get('/',(req,res) => {
    res.send('hey world')
})

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})