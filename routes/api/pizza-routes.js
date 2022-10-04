const router = require("express").Router();

const {
  getAllPizzas,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza,
} = require("../../controllers/pizza-controller");

router.route("/").get(getAllPizzas).post(createPizza);

router.route("/:id").get(getPizzaById).put(updatePizza).delete(deletePizza);

module.exports = router;
