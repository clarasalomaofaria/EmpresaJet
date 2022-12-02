var express = require("express");
var router = express.Router();

var kpigeralController = require("../controllers/kpigeralController");

// DashBoardGeral Tela principal
router.get("/kpisdashboardgeral/:idEmpresa", function (req, res) {
    kpigeralController.buscarMedidasEmTempoReal(req, res);
});

// Setor Frios 
router.get("/kpisdosetorFrios/:idEmpresa", function (req, res) {
    kpigeralController.KpiSetorFrios(req, res);
});

router.get("/kpiSemEstoque/:idEmpresa", function (req, res) {
    kpigeralController.KpiSemEstoque(req, res);
});

router.get("/kpiSemEstoqueAlgum/:idEmpresa", function (req, res) {
    kpigeralController.KpiSemEstoqueAlgum(req, res); 
});

// Setor Marcearia
router.get("/kpisdoSetorMarcearia/:idEmpresa", function (req, res) {
    kpigeralController.kpisdoSetorMarcearia(req, res);
});

router.get("/kpiSemEstoqueMarcearia/:idEmpresa", function (req, res) {
    kpigeralController.KpiSemEstoqueMarcearia(req, res);
});

router.get("/kpiSemEstoqueAlgumMarcearia/:idEmpresa", function (req, res) {
    kpigeralController.KpiSemEstoqueAlgumMarcearia(req, res);
});

// Setor hortifruti
router.get("/kpisdosetorHortifruti/:idEmpresa", function (req, res) {
    kpigeralController.kpisdosetorHortifruti(req, res);
});

router.get("/kpiAunsenciaHortifruti/:idEmpresa", function (req, res) {
    kpigeralController.kpiAunsenciaHortifruti(req, res);
});

router.get("/kpiSemEstoqueAlgumHorti/:idEmpresa", function (req, res) {
    kpigeralController.kpiSemEstoqueAlgumHorti(req, res);
});

// Setor Cuidados Pessoais
router.get("/kpisdosetorCuidados/:idEmpresa", function (req, res) {
    kpigeralController.kpisdosetorCuidados(req, res);
});

router.get("/kpiAunsenciaCuidados/:idEmpresa", function (req, res) {
    kpigeralController.kpiAunsenciaCuidados(req, res);
});

router.get("/kpiSemEstoqueAlgumCuidados/:idEmpresa", function (req, res) {
    kpigeralController.kpiSemEstoqueAlgumCuidados(req, res);
});

// Setor Bebidas
router.get("/kpisdosetorBebidas/:idEmpresa", function (req, res) {
    kpigeralController.kpisdosetorBebidas(req, res);
});

router.get("/kpiAunsenciaBebidas/:idEmpresa", function (req, res) {
    kpigeralController.kpiAunsenciaBebidas(req, res);
});

router.get("/kpiSemEstoqueAlgumBebidas/:idEmpresa", function (req, res) {
    kpigeralController.kpiSemEstoqueAlgumBebidas(req, res);
});

module.exports = router;