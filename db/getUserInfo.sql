Select * FROM users
JOIN userInfo ON userInfo.userinfo_id = users.id
Where users.id = $1