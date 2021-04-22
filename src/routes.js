"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PokeController_1 = require("./controllers/PokeController");
var router = express_1.Router();
exports.router = router;
var pokeController = new PokeController_1.PokeController();
router.post("/api/v1/Attack", pokeController.attack);
