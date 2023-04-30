import CartItemModel from "../models/cart";
import CategoryModel from "../models/category";
import { ProductModel } from "../models/product";
import ProductImageModel from "../models/productImage";

export const addToCart = async ({ productId, userId }) => {
    const cartItem = await CartItemModel.create({
        productId,
        customerId: userId
    });
    return cartItem.toJSON();
}

export const getCartItems = async (userId) => {
    const cartItems = await CartItemModel.findAll({
        where: {
            customerId: userId
        },
        include: [
            {
                model: ProductModel,
                include: [
                    ProductImageModel,
                    CategoryModel
                ]
            }
        ]
    });
    return cartItems.map((item) => item.toJSON());
}


export const getCartItemsWithDetails = async (userId) => {
    const cartItems = await CartItemModel.findAll({
        where: {
            customerId: userId
        },
        include: [
            ProductModel
        ]
    });
    return cartItems.map((item) => item.toJSON());
}