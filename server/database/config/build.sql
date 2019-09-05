BEGIN;

DROP TABLE IF EXISTS users,city cascade;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR UNIQUE,
  password text NOT NULL
);

CREATE TABLE city (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  country TEXT NOT NULL,
  user_id integer references users(id)
);

INSERT INTO city (name, country) VALUES
  ('Gaza', 'Palestine'),
  ('London', 'UK'),
  ('New York', 'USA');

  INSERT INTO users (email, password) VALUES
  ('alaa', 'alaa123456'),
  ('saja', '123456saja'),
  ('salma', '123456salma');

COMMIT;
