Create TABLE saved_profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    artist VARCHAR (25),
    openness INTEGER,
    conscientousness INTEGER,
    extraversion INTEGER,
    agreeableness INTEGER,
    neuroticism INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id)
)