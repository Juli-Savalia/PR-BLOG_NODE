const express = require('express');
const routes = express.Router();

const { AddBlog, insertBlog, Showblog, deleteBlog, editBlog, UpdateBlog, } = require('../controllers/CrudController');


// file upload 
const multer = require('multer');
const st = multer.diskStorage({
    destination : (req,res,cb) => {
        cb(null,'uploads')
    },
    filename : (req,file,cb) => {
        const uniqname = Date.now();
        cb(null, `${file.fieldname}-${uniqname}`);
    }
})
const fileUpload = multer({storage : st}).single('image');


routes.get('/add',AddBlog);
routes.get('/admin',Showblog)

routes.post('/insertBlog',fileUpload,insertBlog);
routes.get('/deleteBlog',deleteBlog)
routes.get('/editBlog',editBlog)
routes.post('/UpdateBlog',fileUpload,UpdateBlog)
module.exports = routes


