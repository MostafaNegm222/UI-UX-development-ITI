const express = require('express');
const app = express();
const path = require("path")
const port = 3001;

app.use(express.static(path.join(__dirname,"public")));


app.use("*", (req,res,next) => {
    res.send({status:false , message : "this end point is not found"})
})



app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});


// to run use in day 2 npm run page