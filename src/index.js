const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const cors = require('cors');
const port = process.env.PORT;


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api',userRoutes);


app.get("/",(req,res) =>{
    res.send("Bienvenido a mi Api rest");

}
);

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{

        console.log("conexion a la base de datos exitosa");
        
    })
    .catch((error)=>{
        console.log(error);
    });



app.listen(port, () => console.log("server listening on port", port));

