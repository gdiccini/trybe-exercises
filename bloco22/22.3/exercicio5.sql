CREATE FULLTEXT INDEX index_category ON sakila.category(name);
SELECT * FROM sakila.category WHERE MATCH(name) AGAINST('action'); -- query cost: 0.35

DROP INDEX index_category ON sakila.category;
SELECT * FROM sakila.category WHERE name LIKE '%action%'; -- query cost: 1.85
