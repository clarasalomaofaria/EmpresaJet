var express = require("express");
var router = express.Router();

var kpigeralController = require("../controllers/kpigeralController");

router.get("/kpisdashboardgeral/:idEmpresa", function (req, res) {
    kpigeralController.buscarMedidasEmTempoReal(req, res);
});

router.get("/kpisdosetorFrios/:idEmpresa", function (req, res) {
    kpigeralController.KpiSetorFrios(req, res);
});

router.get("/kpiSemEstoque/:idEmpresa", function (req, res) {
    kpigeralController.KpiSemEstoque(req, res);
});

router.get("/kpiSemEstoqueAlgum/:idEmpresa", function (req, res) {
    kpigeralController.KpiSemEstoqueAlgum(req, res);
});

module.exports = router;