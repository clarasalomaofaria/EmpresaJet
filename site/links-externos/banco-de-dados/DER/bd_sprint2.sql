-- Active: 1663369181228@@127.0.0.1@3306@empresajet
CREATE DATABASE empresajet;
USE empresajet;
drop database empresajet;
CREATE TABLE
    Empresa (
        idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
        nomeEmpresa VARCHAR(45) NOT NULL,
        estado CHAR(2) NOT NULL,
        cidade VARCHAR(45) NOT NULL,
        bairro VARCHAR(45),
        logradouro VARCHAR(45),
        cep CHAR(8) NOT NULL,
        complemento VARCHAR(45),
        cnpj CHAR(14) NOT NULL
    );

CREATE TABLE
    Perfil (
        idPerfil INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(45) NOT NULL,
        senha VARCHAR(45) NOT NULL,
        nome VARCHAR(60) NOT NULL,
        email VARCHAR(50) NOT NULL,
        telefone VARCHAR(11) NOT NULL,
        fkEmpresa INT NULL,
        funcao VARCHAR(45) DEFAULT 'Administrador', CONSTRAINT chkFuncao CHECK (funcao in('Administrador','Usuario')),
        FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa)
    );
    CREATE TABLE
    Produto (
        idProduto INT PRIMARY KEY AUTO_INCREMENT,
        nomeProduto VARCHAR(45) NOT NULL,
        descricao VARCHAR(45)
    );

CREATE TABLE 
    Prateleira(
        idPrateleira INT PRIMARY KEY AUTO_INCREMENT,
        setor VARCHAR(45) NOT NULL,CONSTRAINT chkSetor CHECK 
            (setor in(
                'Frios e congelados',
                'Mercearia',
                'Bebidas',
                'Doces e lanches',
                'Cuidados pessoais',
                'Hortifruti',
                'Carnes',
                'Limpeza',
                'Infantil',
                'Pets',
                'Outros'
            )),
        fkEmpresa INT NOT NULL,
        Foreign Key (fkEmpresa) REFERENCES Empresa(idEmpresa)
);
CREATE TABLE Prateleira_Produto(
    id INT NOT NULL AUTO_INCREMENT,
    fkPrateleira INT NOT NULL,
    fkProduto INT NOT NULL,
    Foreign Key (fkPrateleira) REFERENCES Prateleira(idPrateleira),
    Foreign Key (fkProduto) REFERENCES Produto(idProduto),
    PRIMARY KEY (id,fkPrateleira,fkProduto)
);
CREATE TABLE
    Sensor (
        idSensor INT PRIMARY KEY AUTO_INCREMENT,
        fkPrateleira INT,
        FOREIGN KEY (fkPrateleira) REFERENCES Prateleira(idPrateleira)
    );
   
CREATE TABLE
    Dado(
        idDado INT PRIMARY KEY AUTO_INCREMENT,
        statusSensor INT,
        dtSensor DATETIME DEFAULT CURRENT_TIMESTAMP,
        fkSensor INT,
        Foreign Key (fkSensor) REFERENCES Sensor(idSensor)
    );        
    
CREATE TABLE Historico_Alerta (
idHistorico INT AUTO_INCREMENT,
statusHistorico VARCHAR(45),CONSTRAINT chkStatus CHECK (statusHistorico IN ('Pendente', 'Resolvido')),
dtHistorico DATETIME DEFAULT CURRENT_TIMESTAMP, 
fkDado INT, 
FOREIGN KEY (fkDado) REFERENCES Dado(idDado),
PRIMARY KEY (idHistorico, fkDado)
);

DESC Sensor;
	
-- Exibir dados das tabelas
SELECT * FROM Perfil;
desc Perfil;
SELECT * FROM Empresa;
SELECT * FROM Dado;
SELECT * FROM Produto;
SELECT * FROM Sensor;
SELECT * FROM Prateleira;
SELECT * FROM Historico_Alerta;


-- Exibir Todos os dados das Empresas e de seus funcionarios
select * from Empresa 
    JOIN Perfil 
        ON idEmpresa = fkEmpresa;

-- Exibir Nome das Empresas e de seus funcionarios com seus rescpectivos cargos
select emp.nomeEmpresa,user.nome,user.funcao from Perfil AS user 
    JOIN Empresa AS emp 
            ON fkEmpresa = idEmpresa order by user.funcao;



-- Exibir os dados do sensor de determinado produto em determinado 
-- setor na pratileira por empresa
-- SELECT pra.setor,
--          pro.nomeProduto,
--          pro.marcaProduto,
--          da.statusSensor
--             FROM Prateleira AS pra
--                 JOIN Produto AS pro
--                     ON idProduto = fkProduto
--                         JOIN Dados as da
--                             ON idDado = fkSensor;

-- -- Exibir produtos em falta em determinada empresa
-- SELECT emp.nomeEmpresa,
--          pro.nomeProduto,
--          pro.MarcaProduto,
--          sen.statusSensor,
--             FROM produto AS pro
--                 JOIN Dados AS sen
--                     ON idProduto = fkProduto
--                         JOIN empresa AS emp
--                              ON idEmpresa = fkProduto where idEmpresa = 2 and statusSensor = 0;

