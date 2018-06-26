SELECT * FROM saved_profiles
WHERE user_id = $1
-- req.user.id is the value of $1