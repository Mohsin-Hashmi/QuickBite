const Validator = require('validator');
const validateSignUpUser= (req)=>{

    const{firstName, lastName, emailId, password}= req.body;
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!firstName|| !lastName || !emailId || !password){
        throw new Error("All fields are required");
    }
    else if(!Validator.isEmail(emailId)){
        throw new Error("Invalid email format");
    }else if(password.length < 6){
        throw new Error("passowrd must be atleast six characters");
    }else if(!Validator.isStrongPassword(password)){
        throw new Error("Password must be strong");
    }
}

module.exports= validateSignUpUser;