const Blog = require('../models/blog')

const blog_index =(req,res)  =>{
    Blog.find().sort({createdAt:-1})
	.then((result)=>{
		res.render('blogs/index',{title:'All Blogs',blogs:result})
	})
	.catch((err) =>{console.log("Error message",err)
})
}


const blog_details =(req,res)  =>{
    const id = req.params.id
	console.log(id)

	Blog.findById(id)
	.then((result)=> {
		 res.render('blogs/single-view',{blog:result,title:'Blog Details'})//render to single view page
	})
	.catch((err)=>{ 
		res.status(404).render('404',{title:'Blog not found :('})
	});
}

const blog_create_get =(req,res)  =>{
    res.render('blogs/create',{title:'Registration Page'})

}
const blog_create_post =(req,res)  =>{
    console.log('This: ',req.body)
	const blog = new Blog(req.body)
	 blog.save()
		.then((result)=> {
			res.redirect('/blogs')//redirected to homepage
		})
		.catch((err)=>{ console.log(err)})
}
const blog_delete =(req,res)  =>{
    const id = req.params.id;
	Blog.findByIdAndDelete(id)
	.then(result =>{
		res.json({redirect: '/blogs'})
	})
	.catch((err)=> console.log(err))
}
module.exports ={
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete,
}