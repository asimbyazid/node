const express = require('express')

//express app
const app = express();

//listen for request
app.listen(3000)

app.get('/',(req,res)=>{
	res.sendFile('./views/index.html',{root:__dirname})
});

app.get('/about',(req,res)=>{
	res.sendFile('./views/about.html',{root:__dirname})
});


//redirect
app.get('/about-me',(req,res)=>{
	res.redirect('/about')
});

//404 middleware / it is synchoronous
//Position matters alot
app.use((req,res)=>{
	res.status(404).sendFile('./views/404.html',{root:__dirname})
});