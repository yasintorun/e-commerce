const { DataTypes } = require("sequelize");
const { DbContext } = require("../db");

const CityModel = DbContext.define("cities", {
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

export default CityModel;