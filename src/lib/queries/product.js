import CategoryModel from "../models/category";
import { ProductModel } from "../models/product";
import ProductImageModel from "../models/productImage";


export const getProducts = async () => {
    const products = await ProductModel.findAll({
        include: [
            CategoryModel,
            ProductImageModel
        ]
    })
    return products.map((item) => item.toJSON())
}


export const getProductById = async (id) => {
    const product = await ProductModel.findByPk(id, {
        include: [
            CategoryModel,
            ProductImageModel
        ]
    })
    return product.toJSON()
}