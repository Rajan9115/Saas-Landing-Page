import express from 'express';
import jwt from 'jsonwebtoken'


export const login =async(req,res)=>{
    try{
        //fetch data from req body
        const {email,password} = req.body;

        //validate fields
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }

           const payload = { 
            email: email,
            };
           const JWT_SECRET = '12121212'

         //generate jwt token and send it in response
            const token = jwt.sign(payload,JWT_SECRET,{expiresIn:'2h'});
         //send fake response
            return res.status(200).json({
                success:true,
                message:"User logged in succesfully",
                token
            })

    }catch(err){
        console.log("Error while logIn",err);
        return res.status(500).json({
            success:false,
            message:"Unable to logIn,Please Try again"
          })
    }
}



