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

    //home routes
    router.get('/about', (req,res)=>{
        res.render('company/about', { title: "DIGIGO | About Us " });
    })
    router.get('/help', (req,res)=>{
        res.render('company/help', { title: "DIGIGO | Help Center " });
    })
    router.get('/service', (req,res)=>{
        res.render('company/service', { title: "DIGIGO | Our Services " });
    })
    router.get('/team', (req,res)=>{
        res.render('company/team', { title: "DIGIGO | Our Team " });
    })

    //stock routes
    router.get('/stock', (req, res)=>{
        res.render('stock/stock', { title: "DIGIGO | Stock " });
    })

    //product routes
    router.get('/platform', (req,res)=>{
        res.render('product/digigo', { title: "DIGIGO | Digigo Platform " });
    })
    router.get('/exchange', (req,res)=>{
        res.render('product/exchange', { title: "DIGIGO | Exchange " });
    })
    router.get('/digibot', (req,res)=>{
        res.render('product/digibot', { title: "DIGIGO | Digibot " });
    })
    //fund routes
    router.get('/term', (req,res)=>{
        res.render('fund/term', { title: "DIGIGO | Terms And Conditions " });
    })
    router.get('/invest', (req,res)=>{
        res.render('fund/invest', { title: "DIGIGO | Invest " });
    })
    router.get('/partner', (req,res)=>{
        res.render('fund/partner', { title: "DIGIGO | Partner " });
    })

    //airdrop routes
    router.get('/airdrop', (req,res)=>{
        res.render('airdrop/airdrop', { title: "DIGIGO | Airdrops " });
    })

    router.get('/*', (req,res)=>{
        res.redirect('/');
    })
    app.use("/", router);
}

module.exports = initRouter;