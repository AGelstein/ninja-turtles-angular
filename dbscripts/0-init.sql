CREATE ROLE hank WITH LOGIN SUPERUSER PASSWORD 'hank';
CREATE TABLE superheroes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    hero_name VARCHAR(50) NOT NULL,
    hero_power_level INT NOT NULL,
    is_human BOOLEAN NOT NULL,
    number_of_missions INT,
    hero_age INT,
    origin VARCHAR(50)
);
INSERT INTO superheroes (hero_name, hero_power_level, is_human, number_of_missions, hero_age, origin)
VALUES 
    ('Captain Velocity', 90, TRUE, 150, 32, 'Metro City'),
    ('Mighty Boulder', 85, FALSE, 200, 40, 'Rockridge Mountains'),
    ('Techno Phantom', 78, TRUE, 120, 28, 'Cyber Haven'),
    ('Aqua Blaze', 88, FALSE, 100, 25, 'Oceanis'),
    ('Night Falcon', 82, TRUE, 175, 35, 'Skyline City');