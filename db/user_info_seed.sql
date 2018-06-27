CREATE TABLE userInfo (
    id SERIAL PRIMARY KEY,
    bio VARCHAR (500),
    email VARCHAR (45)
);



UPDATE userInfo
SET bio = $2, email = $3
WHERE id = $1;
SELECT * FROM userInfo