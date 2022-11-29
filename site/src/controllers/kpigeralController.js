var kpigeralModel = require("../models/kpigeralModel");

function buscarMedidasEmTempoReal(req, res) {

    const limite_linhas = 44;

    var idEmpresa = req.params.idEmpresa;


    console.log(`Recuperando medidas ${limite_linhas} em tempo real`);

    kpigeralModel.buscarMedidasEmTempoReal(idEmpresa, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function KpiSetorFrios(req, res) {

    var idEmpresa = req.params.idEmpresa

    produtosModel.KpiSetorFrios(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function KpiSemEstoque(req, res) {

    var idEmpresa = req.params.idEmpresa

    produtosModel.KpiSetorFrios(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function KpiSemEstoqueAlgum(req, res) {

    var idEmpresa = req.params.idEmpresa

    produtosModel.KpiSetorFrios(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarMedidasEmTempoReal ,
    KpiSetorFrios,
    KpiSemEstoque,
    KpiSemEstoqueAlgum
}