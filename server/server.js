const path = require('path');
const express = require('express');
const app = express(); //setup instance
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; //port assign by heroku, 3000 = local port

app.use(express.static(publicPath));

//match all get request
app.get('*', (req, res)=>{
    res.sendFile(path.join(publicPath, 'index.html'));
});

//start up the server
app.listen(port, ()=>{
    console.log('Server is up!');
});