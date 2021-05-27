CREATE VIEW address_info AS
SELECT 
    A.address_id, A.address, A.district, C.city_id, C.city
FROM
    sakila.address AS A
        INNER JOIN
    sakila.city AS C ON A.city_id = C.city_id
ORDER BY C.city;

SELECT * FROM address_info;
