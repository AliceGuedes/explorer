const { Router } = require("express");

const usersRouters = require("./users.routes");
const notesRouters = require("./notes.routes");
const sessionsRoutes = require("./sessions.routes")


const routes = Router();

routes.use("/users", usersRouters);
routes.use("/notes", notesRouters);
routes.use("/sessions", sessionsRoutes);


module.exports = routes;