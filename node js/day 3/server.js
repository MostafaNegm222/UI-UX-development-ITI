const express = require("express")
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRoutes = require("./routes/users");
const todoRoutes = require("./routes/todos");
const authRoutes = require("./routes/auth");
const authMiddleWare = require("./middleware/auth.js");
const connectDB = require("./config/db.js");
    
    
    const app = express();
    dotenv.config({ path: "./.env" });
    



    app.use(express.json());
    app.use(morgan("dev"))
    app.use("/",authRoutes)
    app.use("/users",authMiddleWare,userRoutes)
    app.use("/todos",authMiddleWare,todoRoutes)

   
    app.use((err, req, res, next) => {
        res.status(400).json({ status: false, message: err });
    });
    
    app.use("*" , (req,res,next) => {
        res.send({ status: false, message: `this end point not found `})
    })
    
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        connectDB()
        console.log(`this server is running in port ${PORT}`);
    });
