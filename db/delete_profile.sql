DELETE FROM saved_profiles WHERE id = $1;
SELECT * FROM saved_profiles ORDER BY id