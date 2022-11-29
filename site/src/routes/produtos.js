var express = require("express");
var router = express.Router();

var produtosController = require("../controllers/produtosController");


router.get("/listarprodutos/:idEmpresa", function (req, res) {
    produtosController.listarprodutos(req, res);
});

router.get("/listarprodutosMercearia/:idEmpresa", function (req, res) {
    produtosController.listarprodutosMercearia(req, res);
});

router.get("/listarprodutosHortifruti/:idEmpresa", function (req, res) {
    produtosController.listarprodutosHortifruti(req, res);
});

router.get("/listarProdutosCuidados/:idEmpresa", function (req, res) {
    produtosController.listarProdutosCuidados(req, res);
});

router.get("/listarProdutosBebidas/:idEmpresa", function (req, res) {
    produtosController.listarProdutosBebidas(req, res);
});

router.put("/confirmarProduto/:idProduto", function (req, res) {
    produtosController.confirmarProduto(req, res);
});


module.exports = router;