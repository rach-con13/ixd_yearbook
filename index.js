const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const cors = require('cors');



app.use(express.static(path.join(__dirname, './client/build')))

require('dotenv').config()
app.use(express.json())
app.use(cors());

const mainRoute = require('./Routes/main');

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})

app.use('/api',mainRoute);


app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})