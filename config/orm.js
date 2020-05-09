const SQLConnection = require("./connection");

module.exports = {
    selectAll: () => SQLConnection.sequelize.query("SELECT * FROM `burgers`", { type: SQLConnection.sequelize.QueryTypes.SELECT }),

    insertOne: burger_name => SQLConnection.sequelize.query(`INSERT INTO burgers (burger_name) VALUES ("${burger_name}")`),

    updateOne: id => SQLConnection.sequelize.query(`UPDATE burgers SET devoured = 1 WHERE id = ${id}`)
}