var database = require("../database/config");


// DashBoard Geral
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

// Setor Frios
function KpiSetorFrios(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    // Select para mostrar o abastecimento do setor.
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function KpiSemEstoque(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    // Select para mostrar a Ausencia de Produto.
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function KpiSemEstoqueAlgum(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    // Select para mostrar os Produtos sem estoque.
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Setor Marcearia
function KpiSetorMarcearia(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    // Select para mostrar o abastecimento do setor.
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function KpiSemEstoqueMarcearia(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    // Select para mostrar a ausencia..
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

function KpiSemEstoqueAlgumMarcearia(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    // Select para mostrar o estoque do setor.
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Setor HortiFruti
function kpisdosetorHortifruti(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    // Select para mostrar o abastecimento do setor.
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

function kpiAunsenciaHortifruti(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    // Select para mostrar a ausencia do setor.
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

function kpiSemEstoqueAlgumHorti(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    // Select para mostrar o estoque do setor.
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

// Setor Cuidados Pessoais
function kpisdosetorCuidados(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    // Select para mostrar o abastecimento do setor.
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

function kpiAunsenciaCuidados(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    // Select para mostrar a ausencia de produtos do setor.
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

function kpiSemEstoqueAlgumCuidados(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    // Select para mostrar o estado do setor.
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

// Setor Bebidas
function kpisdosetorBebidas(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    // Select para mostrar o abastecimento do setor.
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

function kpiAunsenciaBebidas(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    // Select para mostrar a aunsencia de produtos do setor.
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

function kpiSemEstoqueAlgumBebidas(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");
    
    // Select para mostrar o estado do setor.
    var instrucao = `
      SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
          JOIN Prateleira prat ON ds.fkPateleira = prat.idPrateleira
             JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                 ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

module.exports = {
    buscarMedidasEmTempoReal,
    KpiSetorFrios,
    KpiSemEstoque,
    KpiSemEstoqueAlgum,
    KpiSetorMarcearia,
    KpiSemEstoqueMarcearia,
    KpiSemEstoqueAlgumMarcearia,
    kpisdosetorHortifruti,
    kpiAunsenciaHortifruti,
    kpiSemEstoqueAlgumHorti,
    KpiSetorMarcearia,
    kpisdosetorCuidados,
    kpiAunsenciaCuidados,
    kpiSemEstoqueAlgumCuidados,
    kpisdosetorBebidas,
    kpiAunsenciaBebidas,
    kpiSemEstoqueAlgumBebidas,
}