CREATE TABLE restaurant (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
)

INSERT INTO restaurant (id, name, location, price_range) VALUES (1, 'djosa', 'zajecar', 3 )