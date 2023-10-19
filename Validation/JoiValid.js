const joi = require('joi');

const schema = joi.object({
    uid: joi.number().min(1).max(5).required(),
    name: joi.string().min(2).max(150).required(),
    email: joi.string().min(1).max(100).required(),
    mobile: joi.string().min(1).max(10).required(),
    photo: joi.string().required(),
    aadhar: joi.string().min(1).max(12).required(),
    doj: joi.date().required(),
    qualifation: joi.string().min(1).max(50).required(),
    dob: joi.date().required(),
    address: joi.string().min(5).max(150).required(),
    state: joi.string().min(3).max(100).required(),
    city: joi.string().min(2).max(100).required(),
    pin: joi.string().min(6).max(6).required(),
    status: joi.string().min(5).max(10).required(),
    password: joi.string().min(5).max(100).required()
})

const admin_validation = (req,res,next)=>{
    const value = schema.validate(req.body)
    if(value.error){
        res.send({error: value.error.details[0]})
    }
    else{
        next()
    }
}

module.exports = admin_validation;