const express = require("express")
const app = express();
const path = require("path")
const fs = require("fs")
const cors = require("cors")
const port = 3000

app.use(cors());


app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/api/products", (req, res, next) => {
    fs.readFile(path.join(__dirname, "products.json"), "utf8", (err, data) => {
        if (err) {
            next(err)
        }
        let products = JSON.parse(data);
        products = products.map(product => ({
            ...product,
            image: `http://localhost:${port}/images/${product.image}`
        }));
        if (products.length == 0) next(`the products array is empty`)
        res.json(products);
    });
});


app.use("*" , (req,res,next) => {
    res.status(404).json({ status: false, message: "This endpoint is not found" });
})

app.use((err, req, res, next) => {
    res.status(400).json({ status: false, message: err });
});

app.listen(port , () =>{
    console.log(`🚀 Server is running at http://localhost:${port}`);
})
