import CartItemModel from "../models/cart";
import CategoryModel from "../models/category";
import { ProductModel } from "../models/product";
import ProductImageModel from "../models/productImage";

export const addToCart = async ({ productId, userId, increase = 1 }) => {
    const isAdded = await CartItemModel.findOne({
        where: {
            productId,
            customerId: userId
        }
    });
    let id = 0;
    if (isAdded) {
        id = isAdded.dataValues.id;
        await CartItemModel.update({
            count: isAdded.dataValues.count + (increase ?? 1)
        }, {
            where: {
                id: isAdded.dataValues.id
            }
        });
    } else {
        const cartItem = await CartItemModel.create({
            productId,
            customerId: userId
        });
        id = cartItem.dataValues.id;
    }

    const item = await CartItemModel.findByPk(id, {
        include: [
            {
                model: ProductModel,
                include: [
                    ProductImageModel,
                    CategoryModel
                ]
            }
        ]
    })
    return item.toJSON();
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


export const deleteCartItem = async (id) => {
    const cartItem = await CartItemModel.findByPk(id);
    await cartItem.destroy();
    return true;
}

export const deleteAllCartItems = async (userId) => {
    await CartItemModel.destroy({
        where: {
            customerId: userId
        }
    })
    return true;
    // const cartItems = await CartItemModel.findAll({
    //     where: {
    //         customerId: userId
    //     }
    // });
    // cartItems.forEach(async (item) => {
    //     await item.destroy();
    // });
    return true;
}