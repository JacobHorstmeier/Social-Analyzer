CREATE TABLE watsonprofile (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id),
    openness INTEGER,
    conscientousness INTEGER,
    extraversion INTEGER,
    agreeableness INTEGER,
    neuroticism INTEGER
)