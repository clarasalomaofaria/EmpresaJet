var empresaModel = require("../models/empresaModel");

function buscar(req, res) {
    const idEmpresa = req.query.id;

    empresaModel.buscar(idEmpresa)
        .then(
            function (resultado) {
                res.json(resultado[0]);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function updateFkEmpresa(req, res) {
    var idEmpresa = req.params.idEmpresa;
    var idPerfil = req.body.idPerfil;
    if (idEmpresa == undefined) {
        res.status(400).send("Seu user está undefined!");
    } else {
        empresaModel.updateFkEmpresa(idEmpresa, idPerfil)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
}

function selecionandoempresa(req, res) {

    empresaModel.selecionandoempresa()
        .then(
            function (resultado) {
                res.json(resultado[0]);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrarEmpresa(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var empresaNome = req.body.empresaNomeServer;
    var estado = req.body.estadoServer;
    var cidade = req.body.cidadeServer;
    var bairro = req.body.bairroServer;
    var logradouro = req.body.logradouroServer;
    var cep = req.body.cepServer;
    var complemento = req.body.complementoVar;
    var cnpj = req.body.cnpjServer;

    // Faça as validações dos valores
    if (empresaNome == undefined) {
        res.status(400).send("O nome da empresa está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("O CNPJ está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("O logradouro está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("A cidade está undefined!");
    }  else if (estado == undefined) {
        res.status(400).send("O estado está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("O CEP está undefined!");
    }
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo empresaModel.js
        empresaModel.cadastrarEmpresa(empresaNome, estado, cidade, bairro, logradouro,
            cep, complemento, cnpj)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    buscar,
    cadastrarEmpresa,
    selecionandoempresa,
    updateFkEmpresa
};