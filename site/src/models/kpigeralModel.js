var database = require("../database/config");

function buscarMedidasEmTempoReal(idEmpresa, limite_linhas) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarMedidasEmTempoReal
}