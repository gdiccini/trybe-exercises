USE sakila;
CREATE VIEW film_with_category AS
    SELECT 
        F.title, FC.category_id, C.`name`
    FROM
        sakila.film AS F
            INNER JOIN
        sakila.film_category AS FC ON F.film_id = FC.film_id
            INNER JOIN
        sakila.category AS C ON FC.category_id = C.category_id
    ORDER BY F.title;

SELECT * FROM film_with_category;
