const express=require('express');
const app=express();
const port=8000;
const expressLayouts = require('express-ejs-layouts');
//database
const db= require('./config/mongoose');

//same layouts for each page
app.use(expressLayouts);

//extract style and script from the sub pages into the layout

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//setting the path to access static pages
app.use(express.static('./assests'));

//use express router
app.use('/',require('./routes'));

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');



app.listen(port,function(err){
if(err)
{
    console.log(`ERROR IN RUNNING THE SERVER: ${err}`);
}
console.log(`Server is up and running at port ${port}`);
});