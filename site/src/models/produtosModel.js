var database = require("../database/config");

function listarprodutos(idEmpresa) {


    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function ListarProdutosFrioseCongelados()");

    var instrucao = `SELECT p.idProduto, p.nomeProduto, ds.statusPrateleira FROM Produto p
	JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
		JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
			JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
				JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
					JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
						WHERE prat.setor = 'Frios e congelados' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 8;
                        `;
                        console.log("Executando a instrução SQL: \n" + instrucao);
                        return database.executar(instrucao);
}

function listarprodutosMercearia(idEmpresa) {

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function ListarProdutosFrioseCongelados()");

    var instrucao = `SELECT p.idProduto, p.nomeProduto, ds.statusPrateleira FROM Produto p
	JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
		JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
			JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
				JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
					JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
						WHERE prat.setor = 'Mercearia' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 10;
                        `;
                        console.log("Executando a instrução SQL: \n" + instrucao);
                        return database.executar(instrucao);
}

function listarprodutosHortifruti(idEmpresa) {

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function ListarProdutosFrioseCongelados()");

    var instrucao = `SELECT p.idProduto, p.nomeProduto, ds.statusPrateleira FROM Produto p
	JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
		JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
			JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
				JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
					JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
						WHERE prat.setor = 'Hortifruti' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 10;
                        `;
                        console.log("Executando a instrução SQL: \n" + instrucao);
                        return database.executar(instrucao);
}

function listarProdutosBebidas(idEmpresa) {
    var instrucao = `SELECT p.idProduto, p.nomeProduto, ds.statusPrateleira FROM Produto p
	JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
		JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
			JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
				JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
					JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
						WHERE prat.setor = 'Bebidas' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 10;
                        `;
                        console.log("Executando a instrução SQL: \n" + instrucao);
                        return database.executar(instrucao);
}

function listarProdutosCuidados(idEmpresa) {
    var instrucao = `SELECT p.idProduto, p.nomeProduto, ds.statusPrateleira FROM Produto p
	JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
		JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
			JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
				JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
					JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
						WHERE prat.setor = 'Cuidados pessoais' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 7;
                        `;
                        console.log("Executando a instrução SQL: \n" + instrucao);
                        return database.executar(instrucao);
}

function confirmarProduto(idProduto, nome){

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function ListarProdutosFrioseCongelados()");

    var instrucao = `
        update produto set nomeProduto = "${nome}" where idProduto = ${idProduto};
    `

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
}