"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProdutoController_1 = require("../controllers/ProdutoController");
const routes = (0, express_1.Router)();
routes.get("/", ProdutoController_1.ProdutoController.listar);
routes.get("/:id", ProdutoController_1.ProdutoController.buscar);
routes.post("/", ProdutoController_1.ProdutoController.criar);
routes.put("/:id", ProdutoController_1.ProdutoController.atualizar);
routes.delete("/:id", ProdutoController_1.ProdutoController.deletar);
exports.default = routes;
