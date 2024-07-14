const UserModel = require('../models/userModel');

const createUser = async function (req, res) {
    const {name, email} = req.body;

    try{
        const user = await UserModel.create({
            name,
            email
        })
        return res.status(201).json({user})
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}

module.exports = {createUser}