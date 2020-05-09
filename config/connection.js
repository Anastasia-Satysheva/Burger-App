"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const modelFolder = path.join(__dirname, "/models/burger");
// const env = process.env.NODE_ENV || "development";
// let config = require(__dirname + "/../config/config.json")[env];
// if (process.env.CI) {
//   config = require(__dirname + "/../config/config.json").ci;
// }
const db = {};

let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, { dialect: "mysql" });
} else {
  sequelize = new Sequelize("burger_db", "root", "", { 
    host: "localhost",
    dialect: "mysql"
  });
}

// fs.readdirSync(modelFolder)
//   .filter(file => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach(file => {
//     const model = sequelize["import"](path.join(modelFolder, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
