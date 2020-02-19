const express = require('express');
const multer = require('multer');
const Blog = require('./../model/Blog')
const router = express.Router();
var initRouter = (app)=> {
    var storage =   multer.diskStorage({
        destination: function (req, file, callback) {
          callback(null, './public/uploads');
        },
        filename: function (req, file, callback) {
          callback(null, file.fieldname + '-' + Date.now());
        }
      });
    var upload = multer({ storage : storage}).single('avatar');
    router.get('/', (req,res)=>{
        res.render('index', { title: "DIGIGO | Home " });
    })
    router.get('/about', (req,res)=>{
        res.render('about', { title: "DIGIGO | About Us " });
    })

    router.get('/posts', (req,res)=>{
        res.render('posts', { title: "DIGIGO | Post " });
    })
    router.post('/posts', (req,res)=>{
        upload(req, res,  async (error)=> {
            try {
                var postItem = new Blog({
                    title: req.body.title,
                    sub: req.body.sub,
                    content1: req.body.content1,
                    content2: req.body.content2,
                    content3: req.body.content3
                });
                console.log(postItem)
                await postItem.save();
                return res.redirect('back');
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
        })
        
    })


    router.get('/blog', (req,res)=>{
        res.render('blog', { title: "DIGIGO | Blog " });
    })
    router.get('/blog-detail', (req,res)=>{
        res.render('blog-detail', { title: "DIGIGO | Blog " });
    })
    router.get('/contact', (req,res)=>{
        res.render('contact', { title: "DIGIGO | Contact " });
    })
    router.get('/service', (req,res)=>{
        res.render('service', { title: "DIGIGO | Our Services " });
    })
    router.get('/team', (req,res)=>{
        res.render('team', { title: "DIGIGO | Our Team " });
    })
    router.get('/product', (req,res)=>{
        res.render('product', { title: "DIGIGO | Our Products " });
    })
    router.get('/exchange', (req,res)=>{
        res.render('exchange', { title: "DIGIGO | Our Exchange " });
    })
    router.get('/buy_sell', (req,res)=>{
        res.render('buy_sell', { title: "DIGIGO | Buy And Sell " });
    })
    router.get('/*', (req,res)=>{
        res.redirect('/');
    })
    app.use("/", router);
}

module.exports = initRouter;