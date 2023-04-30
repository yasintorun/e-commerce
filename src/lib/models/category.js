import { ProductModel } from "./product";

const { DataTypes } = require("sequelize");
const { DbContext } = require("../db");

const CategoryModel = DbContext.define("categories", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {createdAt: false, updatedAt: false});

CategoryModel.hasMany(ProductModel, { foreignKey: 'categoryId' });
ProductModel.belongsTo(CategoryModel, { foreignKey: 'categoryId' });

DbContext.sync().then(() => {
    console.log('Category table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

export default CategoryModel;