CREATE VIEW film_info AS
    SELECT 
        FA.actor_id,
        CONCAT(A.first_name, ' ', A.last_name) AS actor,
        F.title
    FROM
        sakila.actor AS A
            INNER JOIN
        sakila.film_actor AS FA ON A.actor_id = FA.actor_id
            INNER JOIN
        sakila.film AS F ON FA.film_id = F.film_id
    ORDER BY actor;
    
SELECT * FROM film_info;


