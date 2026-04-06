const cors=require('cors');
const express = require('express');
const app = express();
const notesRoutes  = require('./routes/notesRoutes');
app.use(cors());
app.use(express.json());
app.use('/notes', notesRoutes); //middleware
app.listen(3000, ()=>{
    console.log('server started at port 3000');
})

module.exports = app;