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
        },
        immutable: true,
    },
    password:{
        type:String,
        required:true,
        minLength:[6 , "Password must be at least 6 characters long"],
    },
    profilePicture: {
        type: String,
        default: '', // URL or file path to the user's profile picture
    },
    phoneNumber: {
        type: String,
        // validate(value) {
        //     if (value && !validator.isMobilePhone(value, 'any')) {
        //         throw new Error('Invalid phone number');
        //     }
        // },
    },
    bio: {
        type: String,
        maxLength: 250, 
        trim: true,
    },
    address: {
        street: { type: String, default: '' },
        city: { type: String, default: '' },
        state: { type: String, default: '' },
        country: { type: String, default: '' },
        zipCode: { type: String, default: '' },
    },
})

/**Creating the model */
const User= mongoose.model("User", userSchema);
module.exports= User;