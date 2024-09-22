const UserModel = require('../models/authModel');
const BlogModle = require('../models/crudModel')
 

const LoginPage = (req,res) =>{
    if(req.cookies['auth']){
      return  res.redirect('/admin')
    }

  return  res.render('login');
}

const RegisterPage = (req,res) =>{
    return res.render('register')
}


const registerUser = async(req,res) =>{
    const {name,email,password} = req.body;
    // console.log(req.body);
    UserModel.create({
        name:name,
        email:email,
        password:password
    });
    console.log("User Registered");
    
    return res.redirect('/'); 

}
const loginUser = async(req,res) =>{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email:email});
    if(!user || user.password != password){
       console.log("Invalid Email or Password");
       return res.redirect('/');
}
    res.cookie('auth',user)
return res.redirect('/admin');

}
const DashboardPage = (req,res) =>{
    if(!req.cookies['auth']){
        return res.redirect('/');
    }
    const blog = BlogModle.find()  // fetch the blog data from your database or storage
    res.render('Showblog', {
         blog

     });

    // return res.render('Viewblog')
}
const Logout = async(req,res) =>{
    res.clearCookie('auth');
    return res.redirect('/');
}
module.exports = {
    LoginPage,RegisterPage,DashboardPage, registerUser,loginUser,Logout
}