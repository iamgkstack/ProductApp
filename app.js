const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const product       = require('./routes/product.route');
const app           = express();

//mongoose connection in your local environment
mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser:true});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/products', product);

const PORT = process.env.PORT||3000;
app.listen(PORT, ()=>{
    console.log("server started on port: "+ PORT);
})