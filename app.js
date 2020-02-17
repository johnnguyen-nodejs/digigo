const express = require('express');
const initRouter = require('./routes');
const app = express();
// init view
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");


app.use(express.json({ extended: false }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//init routes 
initRouter(app);

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})