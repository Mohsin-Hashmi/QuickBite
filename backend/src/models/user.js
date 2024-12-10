const mongoose= require('mongoose');
const validator= require('validator');
const userSchema= new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength:12,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength:12,
        trim: true
    }, 
    emailId: {
        type : String,
        required:true,
        unique:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email format")
            }
        }
    },
    password:{
        type:String,
        required:true,
        minLength:[6 , "Password must be at least 6 characters long"],
    }
})

/**Creating the model */
const User= mongoose.model("User", userSchema);
module.exports= User;