var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

// router.get("/", function (req, res) {
//    usuarioController.testar(req, res);
// });

router.get("/", function (req, res) {
    usuarioController.buscar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});
  
// ROTAS CRIADAS PARA OS EVENTOS DE ALTERAR O USUARIO
router.put("/confirmar_user/:user", function (req, res) {
    usuarioController.confirmar_user(req, res);
})

// ROTAS CRIADAS PARA OS EVENTOS DE ALTERAR A SENHA
router.put("/confirmar_senha/:user", function (req, res) {
    usuarioController.confirmar_senha(req, res);
})

// ROTAS CRIADAS PARA OS EVENTOS DE ALTERAR O TELEFONE
router.put("/confirmar_telefone/:user", function (req, res) {
    usuarioController.confirmar_telefone(req, res);
})

module.exports = router;