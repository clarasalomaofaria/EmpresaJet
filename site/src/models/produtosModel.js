var database = require("../database/config");

function listarprodutos(idEmpresa) {


    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function ListarProdutosFrioseCongelados()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT TOP 8 prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                        JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                            WHERE prat.setor = 'Frios e congelados' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT DISTINCT prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira FROM Produto p
	JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
		JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
			JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
				JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
					JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
						WHERE prat.setor = 'Frios e congelados' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 8;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }               
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

function listarprodutosMercearia(idEmpresa) {

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function ListarProdutosFrioseCongelados()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT TOP 10 prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                        JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                            WHERE prat.setor = 'Mercearia' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC;
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT DISTINCT prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira FROM Produto p
	JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
		JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
			JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
				JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
					JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
						WHERE prat.setor = 'Mercearia' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 10;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }  
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

function listarprodutosHortifruti(idEmpresa) {

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function ListarProdutosFrioseCongelados()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT top 9 prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                        JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                            WHERE prat.setor = 'Hortifruti' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC;
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `SELECT DISTINCT prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira FROM Produto p
	JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
		JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
			JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
				JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
					JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
						WHERE prat.setor = 'Hortifruti' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 9;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }  
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

function listarProdutosBebidas(idEmpresa) {

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT TOP 10 prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                        JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                            WHERE prat.setor = 'Bebidas' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT DISTINCT prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                        JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                            WHERE prat.setor = 'Bebidas' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 10;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

function listarProdutosCuidados(idEmpresa) {

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT TOP 7 prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                        JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                            WHERE prat.setor = 'Cuidados pessoais' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC;
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT DISTINCT prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                        JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                            WHERE prat.setor = 'Cuidados pessoais' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 7;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
         console.log("Executando a instrução SQL: \n" + instrucao);
         return database.executar(instrucao);
}

function confirmarProduto(idProduto, nome){

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function ListarProdutosFrioseCongelados()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        update produto set nomeProduto = "${nome}" where idProduto = ${idProduto};
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        update produto set nomeProduto = "${nome}" where idProduto = ${idProduto};
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alerta(idPrat, tipo){

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function alerta()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        INSERT INTO historico_alerta (dtHistorico, tipo, fkPrateleiraHistorico) VALUES (getutcdate(), '${tipo}', '${idPrat}')
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        INSERT INTO historico_alerta (dtHistorico, tipo, fkPrateleira) VALUES (now(), '${tipo}', '${idPrat}')
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function tirarAlerta(idPrat){

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function tirarAlerta()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        UPDATE historico_alerta SET statusHistorico = "resolvido" WHERE fkPrateleiraHistorico = ${idPrat};
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        UPDATE historico_alerta SET statusHistorico = "resolvido" WHERE fkPrateleira = ${idPrat};
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    listarprodutos,
    confirmarProduto,
    listarprodutosMercearia,
    listarprodutosHortifruti,
    listarProdutosBebidas,
    listarProdutosCuidados,
    alerta,
    tirarAlerta
}