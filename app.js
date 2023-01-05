const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
//connect to mongodb
const dbURI = "mongodb+srv://nightowl:nightowl123@cluster0.mdkzepd.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result) => {
	console.log('connected to db')
	app.listen(3000)
})
.catch((err) => console.log(err))

//express app
const app = express();

//register view engine
app.set('view engine','ejs')



//listen for request
//app.listen(3000)

//  logger middleware
app.use(morgan('tiny')); //'tiny' or 'dev'

//middleware and static files
app.use(express.static('public'))

app.get('/',(req,res)=>{
	//sendfile is for loading normal html pages
	//res.sendFile('./views/index.html',{root:__dirname})
	const blogs =[
		{title: 'Yoshi finds egss',snippet: 'lorem ipsum'},
		{title: 'Yoshi finds egss',snippet: 'lorem ipsum'},
		{title: 'Yoshi finds egss',snippet: 'lorem ipsum'}
	];
	res.render('index',{title:'Home Page',blogs:blogs})
});

app.get('/about',(req,res)=>{
	//res.sendFile('./views/about.html',{root:__dirname})
	res.render('about',{title:'About us'})
});

app.get('/blogs/create',(req,res)=>{
	//res.sendFile('./views/about.html',{root:__dirname})
	res.render('create',{title:'Registration Page'})
});

//redirect
// app.get('/about-me',(req,res)=>{
// 	res.redirect('/about')
// });


//404 middleware / it is synchoronous
//Position matters alot
app.use((req,res)=>{
	res.status(404).render('404',{title:'404 Page'})
	//res.status(404).sendFile('./views/404.html',{root:__dirname})
});

