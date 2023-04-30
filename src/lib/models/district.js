import CityModel from "./city";

const { DataTypes } = require("sequelize");
const { DbContext } = require("../db");

const DistrictModel = DbContext.define("districts", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cities',
            key: 'id'
        }
    }
}, {createdAt: false, updatedAt: false});


DistrictModel.belongsTo(CityModel, { foreignKey: 'cityId' });
CityModel.hasMany(DistrictModel, { foreignKey: 'cityId' });

export default DistrictModel;