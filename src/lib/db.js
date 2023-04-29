const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    'store',
    'yt2',
    'Q123asd987.!',
    {
        host: '45.200.120.178',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

 exports.DbContext = sequelize;