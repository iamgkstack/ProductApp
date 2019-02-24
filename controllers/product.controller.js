const Product = require('../models/product.model');


exports.product_create = (req, res) =>{
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};


exports.product_details = (req, res)=> {
    Product.findById(req.params.id, (err, product)=> {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = (req, res)=>{
    Product.findByIdAndUpdate(req.params.id, {$set: req.body},
    (err, product)=>{
        if(err)
            return next(err);

        res.send('Product updated!!');
    })
}

exports.product_delete = (req, res)=>{
    Product.findByIdAndDelete(req.params.id, (err)=>{
        if(err)
            return next(err);
        res.send('Delete Successfully!!');
    })
}



exports.test = (req, res)=>{
    res.send("Greeting from the Test controler!!");
}