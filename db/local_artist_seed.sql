CREATE TABLE localartist (
    id SERIAL PRIMARY KEY,
    artistname VARCHAR (45),
    watsondata TEXT
)

select watsondata from localartist
where artistname = $1
