-- Select bio, email, id FROM users
-- JOIN ON userInfo.id = users.id;
-- for the join write a query that joins then gets
UPDATE userInfo
SET bio = $2, email = $3
WHERE id = $1;
SELECT * FROM userInfo