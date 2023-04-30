import OrderModel from "../models/order"
import { deleteAllCartItems } from "./cart";

export const payOrder = async ({userId, address, amount}) => {
    console.log(userId, address, amount)
    const order = await OrderModel.create({
        customerId: userId,
        address,
        amount,
        date: new Date()
    })
    deleteAllCartItems(userId);
    return order.toJSON();
}

export const getOrderById = async (id) => {
const order = await OrderModel.findByPk(id);
    return order.toJSON();
}