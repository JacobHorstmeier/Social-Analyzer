CREATE TABLE userInfo (
    id SERIAL PRIMARY KEY,
    bio VARCHAR (500),
    email VARCHAR (45)
);

Select bio, email, id FROM users
JOIN ON userInfo.id = users.id;

UPDATE userInfo
SET bio = $2, email = $3
WHERE id = $1;
SELECT * FROM userInfo;

SELECT * FROM userInfo
Where id = $1