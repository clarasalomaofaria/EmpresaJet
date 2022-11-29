-- Active: 1663369181228@@127.0.0.1@3306@empresajet
CREATE DATABASE empresajet;
USE empresajet;

CREATE TABLE
    empresa (
        idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
        nomeEmpresa VARCHAR(45) NOT NULL,
        estado CHAR(2) NOT NULL,
        cidade VARCHAR(45) NOT NULL,
        bairro VARCHAR(45),
        logradouro VARCHAR(80) NOT NULL,
        cep CHAR(8) NOT NULL,
        complemento VARCHAR(45),
        cnpj CHAR(14) NOT NULL
    );


CREATE TABLE
    perfil (
        idPerfil INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(45) NOT NULL,
        senha VARCHAR(45) NOT NULL,
        nome VARCHAR(60) NOT NULL,
        email VARCHAR(50) NOT NULL,
        telefone VARCHAR(11),
        funcao VARCHAR(45) DEFAULT 'Administrador', CONSTRAINT chkFuncao CHECK (funcao in('Administrador','Usuário')),
        fkEmpresa INT,
        FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
    );

-- PersonID int FOREIGN KEY REFERENCES Persons(PersonID)


    CREATE TABLE 
    prateleira (
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
        fkEmpresa INT,  
        FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
);

CREATE TABLE
    produto (
        idProduto INT PRIMARY KEY AUTO_INCREMENT,
        nomeProduto VARCHAR(45) NOT NULL,
        descricao VARCHAR(45)
    );
    
CREATE TABLE 
	prateleira_produto (
		id INT AUTO_INCREMENT,
        fkPrateleira INT,
        FOREIGN KEY (fkPrateleira) REFERENCES prateleira (idPrateleira),
        fkProduto INT,
        FOREIGN KEY (fkProduto) REFERENCES produto (idProduto),
        PRIMARY KEY (id, fkPrateleira, fkProduto)
    );
   
CREATE TABLE
    dados_sensor(
        idDado INT PRIMARY KEY AUTO_INCREMENT,
        statusPrateleira INT,
        dtPrateleira DATETIME DEFAULT CURRENT_TIMESTAMP,
        fkPrateleira INT,
        FOREIGN KEY (fkPrateleira) REFERENCES prateleira (idPrateleira)
    );      
 
     
CREATE TABLE 
	historico_alerta (
		idHistorico INT PRIMARY KEY AUTO_INCREMENT,
		statusHistorico VARCHAR(45),
		dtHistorico DATETIME DEFAULT CURRENT_TIMESTAMP,
        titulo VARCHAR(45),
        setor VARCHAR(45),
        abastecimento int,
		estado VARCHAR(45),
        produto VARCHAR(45),
		fkDado INT,
        FOREIGN KEY (fkDado) REFERENCES dados_sensor (idDado)
);


INSERT INTO prateleira(setor,fkEmpresa) VALUES
('Frios e congelados', 1),
('Frios e congelados', 1),
('Frios e congelados', 1),
('Frios e congelados', 1),
('Frios e congelados', 1),
('Frios e congelados', 1),
('Frios e congelados', 1),
('Frios e congelados', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Cuidados Pessoais', 1),
('Cuidados Pessoais', 1),
('Cuidados Pessoais', 1),
('Cuidados Pessoais', 1),
('Cuidados Pessoais', 1),
('Cuidados Pessoais', 1),
('Cuidados Pessoais', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1);

-- FRIOS E CONGELADOS	
INSERT INTO Produto (nomeProduto, descricao) VALUES
('Mussarela','Mussarela 500G'),
('Queijo Prado','Queijo Prado 300G'),
('BATATA FRITA','Presunto Sadia 400G'),
('SALADA','Manteiga 1KG'),
('Requeijão','Requeijão 400G'),
('Iogurte de Morango','Iogurte de Morango 500G'),
('Sorvete Tentação','Sorvete Tentação 1L'),
('Hot Pocket','Hot Pocket de carne');

-- MERCEARIA	
INSERT INTO Produto (nomeProduto, descricao) VALUES
('Cereal Sucrilhos Kelloggs',null),
('Cereal Muslix Quacker',null),
('Arroz Branco Camil',null),
('Feijão Preto Camil',null),
('Azeitona Galo',null),
('Ketchup',null),
('Maionese',null),
('Sal Lebre', null),
('Óleo vegetal Soya', null),
('Achocolatado Nescau', null);

-- HORTIFRUTI
INSERT INTO Produto (nomeProduto, descricao) VALUES
('Tomate Italiano orgânico Taeq',null),
('Batata Baroa orgânica Taeq',null),
('Cenoura orgânica Taeq',null),
('Cebola Amarela orgânica Taeq',null),
('Alho orgânico Taeq',null),
('Banana prata',null),
('Maçã fuji',null),
('Morango orgânico', null),
('Alface Americano', null);

-- CUIDADOS PESSOAIS	
INSERT INTO Produto (nomeProduto) VALUES
('Pasta de Dente Colgate'),
('Fio Dental OralB'),
('Sabonete Palmolive'),
('Sabonete Dove'),
('Shampoo Pantene'),
('Condicionador Pantene'),
('Desodorante Dove');

-- BEBIDAS
INSERT INTO Produto (nomeProduto) VALUES
('Refrigerante Coca-Cola'),
('Refrigerante Coca-Cola Zero'),
('Energético Redbull'),
('Energético Redbull Sem açucar'),
('Refrigerante Fanta Laranja'),
('Refrigerante Fanta Guaraná'),
('Cerveja Heineken'),
('Cerveja Original'),
('Cerveja Amster Lager'),
('Chá Matte Limão');

INSERT INTO Prateleira_Produto(fkPrateleira, fkProduto) values
(1,1),
(2,2),
(3,3),
(4,4),
(5,5),
(6,6),
(7,7),
(8,8),
(9,9),
(10,10),
(11,11),
(12,12),
(13,13),
(14,14),
(15,15),
(16,16),
(17,17),
(18,18),
(19,19),
(20,20),
(21,21),
(22,22),
(23,23),
(24,24),
(25,25),
(26,26),
(27,27),
(28,28),
(29,29),
(30,30),
(31,31),
(32,32),
(33,33),
(34,34),
(35,35),
(36,36),
(37,37),
(38,38),
(39,39),
(40,40),
(41,41),
(42,42),
(43,43),
(44,44);
          
                        
  