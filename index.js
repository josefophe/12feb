const express = require ('express')
const app = express ()
const port = 3001

//So far so good
app.get('/', (req,res)=> {
    res.send('Hello World')})

app.listen(port,()=> { console.log ('my server runs on local host http://locahost:3001}')})