const Sequelize = require("sequelize");
const orm = require("../config/orm");

module.exports = {

  getAllBurgers: async function (req, res) {
    const burgerList = await orm.selectAll();
    console.log("Burgers:", burgerList);
    return res.render("index", { Burgers: burgerList });
  },

  eatBurger: async function (req, res) {
    await orm.updateOne(req.params.id);
    return res.redirect("/");
  },

  addBurger: async function (req, res) {
    await orm.insertOne(req.body.burger_name);
    return res.redirect("/");
  }

};
