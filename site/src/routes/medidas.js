var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/listarPorEmpresa/:idEmpresa", function (req, res) {
    medidaController.listarPorEmpresa(req, res);
});

router.get("/obterPie/:idEmpresa", function (req, res) {
    medidaController.obterPie(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;