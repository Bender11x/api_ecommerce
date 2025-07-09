import { Router } from "express";
import { UsuariosController } from "../controllers/UsuariosController";

const routes = Router();

routes.get("/", UsuariosController.listar);
routes.post("/", UsuariosController.adicionar);
routes.put("/:id", UsuariosController.editar);
routes.delete("/:id", UsuariosController.deletar);
routes.get("/:id", UsuariosController.buscar)

export default routes;