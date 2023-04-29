const { ProductModel } = require("../models/product");

const getProducts = async () => {
    const products = await ProductModel.findAll()
    console.log(products)
}

getProducts()