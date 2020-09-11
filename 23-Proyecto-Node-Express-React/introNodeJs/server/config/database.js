const Sequelize = require('sequelize');


// require('dotenv').config({ path: 'variables.env' });
// console.info(process.env.BD_NOMBRE);

module.exports = new Sequelize('db_agenciadeviajes', 'root', 'Ari23zon', {
    host: "127.0.0.1",
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
  })