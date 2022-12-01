var database = require("../database/config");

function listarPorEmpresa(idEmpresa) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `	SELECT count(*) as status_falta, DATE_FORMAT(dtPrateleira,'%H:00') as hora from dados_sensor
        JOIN Prateleira on idPrateleira = fkEmpresa
        where statusPrateleira <> 3 and fkEmpresa = ${idEmpresa} group by day(dtPrateleira), hour(dtPrateleira) order by idDado desc LIMIT 12;`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterPie(idEmpresa) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT (SELECT DISTINCT ROUND ((SUM(statusPrateleira) / (44 * 3) * 100)) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
            ORDER BY ds.idDado DESC LIMIT 44) as wip1 ) as abastecido,
                                    (SELECT DISTINCT ROUND ((100 - (SUM(statusPrateleira) / (44 * 3) * 100))) FROM 
                                    (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
            ORDER BY ds.idDado DESC LIMIT 44) AS wip2)  as nao_abastecido;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterPolar(idEmpresa) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT
        (SELECT (SELECT (24 - SUM(statusPrateleira)) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
        JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
        JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Frios e congelados'
        ORDER BY ds.idDado DESC LIMIT 8) as empresa_dados)) faltas_frios,
        
        (SELECT (SELECT (30 - SUM(statusPrateleira)) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
        JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
        JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Mercearia'
        ORDER BY ds.idDado DESC LIMIT 10) as empresa_dados)) faltas_mercearia,
        
        (SELECT (SELECT (30 - SUM(statusPrateleira)) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
        JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
        JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Hortifruti'
        ORDER BY ds.idDado DESC LIMIT 10) as empresa_dados)) faltas_hortifruti,
        
        (SELECT (SELECT (21 - SUM(statusPrateleira)) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
        JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
        JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Cuidados Pessoais'
        ORDER BY ds.idDado DESC LIMIT 7) as empresa_dados)) faltas_cuidados,
        
        (SELECT (SELECT (30 - SUM(statusPrateleira)) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
        JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
        JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Bebidas'
        ORDER BY ds.idDado DESC LIMIT 10) as empresa_dados)) faltas_bebidas;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listarPorEmpresa,
    buscarMedidasEmTempoReal,
    obterPie,
    obterPolar
}
