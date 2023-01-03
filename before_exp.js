const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res) =>{

	// console.log("I hear you, thanks for the request")
	// console.log('headers',req.headers)
	// console.log('method',req.method)	
	//console.log('url',req.url)

	let path = './views/'

	switch(req.url){

		case '/':
			path = path+'index.html';
			res.statusCode = 200
			break;
		case '/about':
			path = path+'about.html';
			res.statusCode = 200
			break;
		case '/about-me':
			res.statusCode = 301
			res.setHeader('Location','/about')
			res.end()
			break;
		default: 
			path = path + '404.html';			
			res.statusCode = 404
			break;

	}
	console.log('Here is the path '+ path)

// 	const user ={
// 		name: 'Asim',
// 		hobby: 'Skating',
// 		color: 'blues. '
// 	}
	// res.setHeader('Content-Type','application/json');
	// res.end(JSON.stringify(user))

	res.setHeader('Content-Type','text/html');

	fs.readFile(path,(err,data)=>{
		if(err){
			console.log(err)
			res.end()
		}
		else{
			//res.write(data)
			res.end(data)
		}
	})
})

server.listen(3000, 'localhost', () =>{
	console.log('Listening to request on port 3000');
})