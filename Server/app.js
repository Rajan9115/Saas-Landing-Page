import express from 'express'
import cors from "cors";
import userRoutes from './routes/user.route.js'

const app = express();





app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors()); // allow all origins



app.use("/api/v1/users",userRoutes)




app.listen(3000,()=>{
    console.log('srever is running on 3000')
})