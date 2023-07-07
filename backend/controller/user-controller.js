 
import User from '../schema/user-schema.js'


export const addUser =async(req,res)=>{
    // console.log('Hello');
    const user=req.body;
    // console.log(user);
    const newUser=new User(user);

    try {
        await newUser.save();
        res.status(201).json({newUser});
    } catch (error) {
        res.status(409).json({err:r=error.message});
    }

}

export const getUsers=async(res)=>{
    try {
       const users= await User.find({});
       res.status(200).json(users);
    } catch (error) {
        res.status(404).json({Error:error.message})
    }
}

