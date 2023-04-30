import { DataTypes } from "sequelize";

const { DbContext } = require("../db");
const { ProductModel } = require("./product");

const ProductImageModel = DbContext.define("product_images", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id'
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isCover: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, { createdAt: false, updatedAt: false });

ProductImageModel.belongsTo(ProductModel, { foreignKey: 'productId' });
ProductModel.hasMany(ProductImageModel, { foreignKey: 'productId' });

DbContext.sync().then(() => {
    console.log('ProductImage table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

export default ProductImageModel;