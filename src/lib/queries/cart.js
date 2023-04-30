import CartItemModel from "../models/cart";

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
        // include: [
        //     {
        //         model: ProductModel,
        //         include: [
        //             ProductImageModel,
        //             CategoryModel
        //         ]
        //     }
        // ]
    });
    console.log("CARTITEMS => ", cartItems)
    return cartItems.map((item) => item.toJSON());
}