import { DataTypes } from "sequelize";
import { DbContext } from "../db";

const OrderModel = DbContext.define("orders", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
    }
}, {createdAt: false, updatedAt: false});

DbContext.sync().then(() => {
    console.log('Order table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

export default OrderModel;