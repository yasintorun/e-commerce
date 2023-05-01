const { Sequelize } = require("sequelize");
import mysql2 from 'mysql2';
const sequelize = new Sequelize(
    'store',
    'yt2',
    'Q123asd987.!',
    {
        host: '45.200.120.178',
        dialect: 'mysql',
        dialectModule: mysql2,
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

 exports.DbContext = sequelize;