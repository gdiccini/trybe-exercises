CREATE VIEW movies_languages AS
SELECT 
    F.title, F.language_id, L.`name`
FROM
    sakila.film AS F
        INNER JOIN
    sakila.`language` AS L ON F.language_id = L.language_id;
    
SELECT * FROM movies_languages;
