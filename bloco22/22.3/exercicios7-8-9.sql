-- 1. Escreva uma query SQL para alterar na tabela 
-- localtions o nome da coluna street_address para address , mantendo o mesmo tipo e tamanho de dados.

USE hr;
ALTER TABLE locations CHANGE STREET_ADDRESS address varchar(40) DEFAULT NULL;

-- 2. Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.

ALTER TABLE regions CHANGE REGION_NAME region varchar(25);

-- 3. Escreva uma query SQL para alterar na tabela countries o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE countries CHANGE COUNTRY_NAME country varchar(40);
