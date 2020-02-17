const express = require('express');
const router = express.Router();
var initRouter = (app)=> {
    router.get('/', (req,res)=>{
        res.render('index', { title: "DIGIGO | Home " });
    })
    router.get('/about', (req,res)=>{
        res.render('about', { title: "DIGIGO | About Us " });
    })
    router.get('/blog', (req,res)=>{
        res.render('index', { title: "DIGIGO | Blog " });
    })
    router.get('/contact', (req,res)=>{
        res.render('index', { title: "DIGIGO | Contact " });
    })
    router.get('/service', (req,res)=>{
        res.render('index', { title: "DIGIGO | Our Services " });
    })
    router.get('/team', (req,res)=>{
        res.render('index', { title: "DIGIGO | Our Team " });
    })
    router.get('/product', (req,res)=>{
        res.render('product', { title: "DIGIGO | Our Products " });
    })
    router.get('/exchange', (req,res)=>{
        res.render('exchange', { title: "DIGIGO | Our Exchange " });
    })
    router.get('/*', (req,res)=>{
        res.redirect('/');
    })
    app.use("/", router);
}

module.exports = initRouter;