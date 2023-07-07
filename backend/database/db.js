import mongoose from "mongoose";

const Connection =async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@mern-app.8emlcy1.mongodb.net/`;
    try {
       await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
       console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting database',error);
    }
}

export default Connection;