const express = require('express')
const app = express()

const router = require('./routes/people')
const authRouter = require('./routes/auth')

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/people',router);
app.use('/auth',authRouter);



app.listen(5000,()=>{
    console.log(`Server Listening on port:5000...`);
})