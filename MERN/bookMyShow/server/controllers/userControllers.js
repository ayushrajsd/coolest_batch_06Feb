const User = require("../model/userModel")

const register = async (req, res)=>{
    try{

       const userExists = await User.findOne({email: req.body.email}) 
       if(userExists){
        return res.send({
            success:false,
            message:"User already exists"
        })
       }

       const newUser = new User(req.body)
       await newUser.save()

       res.send({
        success:true,
        message:"User registered successfully, Please Login"
       })

    }catch(err){
        console.log(err)
    }
}

const login = async (req, res)=>{
    try{
        const user = await User.findOne({email: req.body.email})
        if(!user){
            return res.send({
                success:false,
                message:"User not found. Please register"
            })
        }
        if(req.body.password !== user.password){
            return res.send({
                success:false,
                message:"Sory, Invalid password"
            })
        }
        res.send({
            success:true,
            message:"Login Successful",
            user:user
        })   

    }catch(err){
        console.log(err)
        return res.status(500).send({
            success:false,
            message:"Internal Server Error"
        })
    }
}

module.exports = {
    register,
    login
}