// module.exports.profile=function(req,res)
// {
//     res.end('<h1>User Profile <h1>');
// }
module.exports.profile=function(req,res)
{
    
    return res.render('user_profile',{
        title:"User Profile"
    });
} 


//render the sign up page
module.exports.signUp=function(req,res)
{
    return res.render('user_sign_up',{
        title:"Codeial | Sign Up" 
    })
}

//render the sign in page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"Codeial |Sign In"
    })
}
//get the sign up date
module.exports.create=function(req,res){
    //Todo Later

}
//sign in and create session for the user
module.exports.createSession=function(req,res){
    //Todo Later
}