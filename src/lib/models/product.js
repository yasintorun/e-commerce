const { DataTypes } = require("sequelize");
const { DbContext } = require("../db");

const ProductModel = DbContext.define("products", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
        }
    }
}, {createdAt: false, updatedAt: false});

DbContext.sync().then(() => {
    console.log('Product table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

exports.ProductModel = ProductModel;