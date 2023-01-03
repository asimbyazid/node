const http = require('http');
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req,res) =>{

//lodash
	const num = _.random(0,10);

	console.log(num)

	const greet = _.once(()=>{
		console.log("Salaam Alaikum")
	})

	greet()
	
	greet()
	res.end()

})

server.listen(3000, 'localhost', () =>{
	console.log('Listening to request on port 3000');
})