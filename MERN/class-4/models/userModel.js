const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    createdAt: Date,
    updatedAt: Date
})

userSchema.pre('save',function(next){
    const now = new Date()
    this.updatedAt = now;
    if(!this.createdAt){
        this.createdAt = now
    }
    next()
})

userSchema.post('save',function(doc,next){
    console.log(`User ${doc.name} has been saved`)
    next()
})

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel