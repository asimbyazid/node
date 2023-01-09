const express = require('express')
const router =express.Router();
const blogController = require('../controllers/blogController')

//index route
router.get('/',blogController.blog_index)

router.get('/create',blogController.blog_create_get);

router.delete('/:id',blogController.blog_delete)

//post data inputed from the forms to the database
router.post('/',blogController.blog_create_post);


router.get('/:id',blogController.blog_details)

module.exports = router;