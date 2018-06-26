Create TABLE saved_profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    artist VARCHAR (25),
    openness INTEGER,
    conscientiousness INTEGER, 
    extraversion INTEGER,
    agreeableness INTEGER,
    neuroticism INTEGER
    
)

-- Get request
SELECT * FROM saved_profiles
WHERE user_id = $1
-- req.user.id is the value of $1

-- Post request
INSERT INTO saved_profiles (user_id, artist, openness, conscientiousness, extraversion, agreeableness, neuroticism )
VALUES ($1,$2,$3,$4,$5,$6,$7)

-- Delete request