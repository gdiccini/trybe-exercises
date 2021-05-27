CREATE INDEX index_postal_code ON sakila.address(postal_code);
SELECT * FROM sakila.address WHERE postal_code = '36693'; -- query cost: 0.35

DROP INDEX index_postal_code ON sakila.address;
SELECT * FROM sakila.address WHERE postal_code = '36693'; -- query cost: 61.80
