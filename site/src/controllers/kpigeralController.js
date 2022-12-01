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

    produtosModel.KpiSemEstoque(idEmpresa).then(function (resultado) {
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

    produtosModel.KpiSemEstoqueAlgum(idEmpresa).then(function (resultado) {
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
function KpiSetorMarcearia(req, res) {

    var idEmpresa = req.params.idEmpresa

    produtosModel.KpiSetorMarcearia(idEmpresa).then(function (resultado) {
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

    produtosModel.KpiSemEstoqueMarcearia(idEmpresa).then(function (resultado) {
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

    produtosModel.KpiSemEstoqueAlgumMarcearia(idEmpresa).then(function (resultado) {
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

    produtosModel.kpisdosetorHortifruti(idEmpresa).then(function (resultado) {
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

    produtosModel.kpiAunsenciaHortifruti(idEmpresa).then(function (resultado) {
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

    produtosModel.kpiSemEstoqueAlgumHorti(idEmpresa).then(function (resultado) {
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
function KpiSetorMarcearia(req, res) {

    var idEmpresa = req.params.idEmpresa

    produtosModel.KpiSetorMarcearia(idEmpresa).then(function (resultado) {
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

    produtosModel.KpiSemEstoqueMarcearia(idEmpresa).then(function (resultado) {
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

    produtosModel.KpiSemEstoqueAlgumMarcearia(idEmpresa).then(function (resultado) {
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
function kpisdosetorCuidados(req, res) {

    var idEmpresa = req.params.idEmpresa

    produtosModel.kpisdosetorCuidados(idEmpresa).then(function (resultado) {
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

    produtosModel.kpiAunsenciaCuidados(idEmpresa).then(function (resultado) {
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

    produtosModel.kpiSemEstoqueAlgumCuidados(idEmpresa).then(function (resultado) {
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

    produtosModel.kpisdosetorBebidas(idEmpresa).then(function (resultado) {
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

    produtosModel.kpiAunsenciaBebidas(idEmpresa).then(function (resultado) {
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

    produtosModel.kpiSemEstoqueAlgumBebidas(idEmpresa).then(function (resultado) {
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
    KpiSetorMarcearia,
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
}