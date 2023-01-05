const mongoose = require("mongoose")
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
    
},{ timestamps:true})

//models must be named with a capital letter
const Blog = mongoose.model('blog',blogSchema) //it is going to pluralized it to Blogs

module.exports = Blog;