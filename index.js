const express=require('express');
const app=express();
const port=8000;

//use express router
app.use('/',require('./routes'));

app.listen(port,function(err){
if(err)
{
    console.log(`ERROR IN RUNNING THE SERVER: ${err}`);
}
console.log(`Server is up and running at port ${port}`);
});