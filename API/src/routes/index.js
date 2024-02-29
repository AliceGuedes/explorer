const { Router } = require("express");

const usersRouters = require("./users.routes");
const notesRouters = require("./notes.routes");


const routes = Router();

routes.use("/users", usersRouters);
routes.use("/notes", notesRouters);


module.exports = routes;