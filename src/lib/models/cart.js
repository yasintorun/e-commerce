import { DataTypes } from "sequelize";
import { DbContext } from "../db";
import { ProductModel } from "./product";

const CartItemModel = DbContext.define("cart_items", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProductModel,
            key: 'id'
        }
    }
});

CartItemModel.belongsTo(ProductModel, { foreignKey: 'productId' });

DbContext.sync().then(() => {
    console.log('Cart Item table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

export default CartItemModel;