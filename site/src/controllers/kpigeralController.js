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

// Setor Frios e Congelados
function KpiSetorFrios(req, res) {

    var idEmpresa = req.params.idEmpresa

    kpigeralModel.KpiSetorFrios(idEmpresa).then(function (resultado) {
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

    kpigeralModel.KpiSemEstoque(idEmpresa).then(function (resultado) {
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

    kpigeralModel.KpiSemEstoqueAlgum(idEmpresa).then(function (resultado) {
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
// Setor Mercearia
function kpisdoSetorMarcearia(req, res) {

    var idEmpresa = req.params.idEmpresa

    kpigeralModel.kpisdoSetorMarcearia(idEmpresa).then(function (resultado) {
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

function KpiSemEstoqueMarcearia(req, res) {

    var idEmpresa = req.params.idEmpresa

    kpigeralModel.KpiSemEstoqueMarcearia(idEmpresa).then(function (resultado) {
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

function KpiSemEstoqueAlgumMarcearia(req, res) {

    var idEmpresa = req.params.idEmpresa

    kpigeralModel.KpiSemEstoqueAlgumMarcearia(idEmpresa).then(function (resultado) {
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
// Setor Hortifruti
function kpisdosetorHortifruti(req, res) {

    var idEmpresa = req.params.idEmpresa

    kpigeralModel.kpisdosetorHortifruti(idEmpresa).then(function (resultado) {
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

function kpiAunsenciaHortifruti(req, res) {

    var idEmpresa = req.params.idEmpresa

    kpigeralModel.kpiAunsenciaHortifruti(idEmpresa).then(function (resultado) {
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

function kpiSemEstoqueAlgumHorti(req, res) {

    var idEmpresa = req.params.idEmpresa

    kpigeralModel.kpiSemEstoqueAlgumHorti(idEmpresa).then(function (resultado) {
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

// Setor Cuidados Pessoais
function kpisdosetorCuidados(req, res) {

    var idEmpresa = req.params.idEmpresa

    kpigeralModel.kpisdosetorCuidados(idEmpresa).then(function (resultado) {
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

function kpiAunsenciaCuidados(req, res) {

    var idEmpresa = req.params.idEmpresa

    kpigeralModel.kpiAunsenciaCuidados(idEmpresa).then(function (resultado) {
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

function kpiSemEstoqueAlgumCuidados(req, res) {

    var idEmpresa = req.params.idEmpresa

    kpigeralModel.kpiSemEstoqueAlgumCuidados(idEmpresa).then(function (resultado) {
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

// Setor Bebidas
function kpisdosetorBebidas(req, res) {

    var idEmpresa = req.params.idEmpresa

    kpigeralModel.kpisdosetorBebidas(idEmpresa).then(function (resultado) {
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

function kpiAunsenciaBebidas(req, res) {

    var idEmpresa = req.params.idEmpresa

    kpigeralModel.kpiAunsenciaBebidas(idEmpresa).then(function (resultado) {
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

function kpiSemEstoqueAlgumBebidas(req, res) {

    var idEmpresa = req.params.idEmpresa

    kpigeralModel.kpiSemEstoqueAlgumBebidas(idEmpresa).then(function (resultado) {
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

function setorMenosAbastecido(req, res){

    var idEmpresa = req.params.idEmpresa

    kpigeralModel.setorMenosAbastecido(idEmpresa).then(function (resultado){
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
    KpiSemEstoqueAlgum,
    kpisdoSetorMarcearia,
    KpiSemEstoqueMarcearia,
    KpiSemEstoqueAlgumMarcearia,
    kpisdosetorHortifruti,
    kpiAunsenciaHortifruti,
    kpiSemEstoqueAlgumHorti,
    kpisdosetorCuidados,
    kpiAunsenciaCuidados,
    kpiSemEstoqueAlgumCuidados,
    kpisdosetorBebidas,
    kpiAunsenciaBebidas,
    kpiSemEstoqueAlgumBebidas,
    setorMenosAbastecido,
}