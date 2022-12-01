var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.get("/", function (req, res) {
    empresaController.buscar(req, res);
});

router.get("/listar", function (req, res) {
    empresaController.listar(req, res);
});

router.get("/selecionandoempresa", function (req, res) {
    empresaController.selecionandoempresa(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de empresaController.js
router.post("/cadastrarEmpresa", function (req, res) {
    empresaController.cadastrarEmpresa(req, res);
})

router.post("/autenticar", function (req, res) {
    empresaController.entrar(req, res);
});

router.put("/updateFkEmpresa/:idEmpresa", function (req, res) {
    empresaController.entrar(req, res);
});

module.exports = router;