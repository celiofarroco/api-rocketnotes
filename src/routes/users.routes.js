const { Router } = require("express");

const UsersController = require("../controllers/UsersController");
const userRoutes = Router();

const usersControler = new UsersController();

userRoutes.post("/", usersControler.create);
userRoutes.put("/:id", usersControler.update);

module.exports = userRoutes;
