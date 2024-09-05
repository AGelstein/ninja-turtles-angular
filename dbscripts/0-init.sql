CREATE ROLE hank WITH LOGIN SUPERUSER PASSWORD 'hank';
CREATE TABLE inflation_data (
    RegionalMember TEXT,
    Year INT,
    Inflation DECIMAL,
    Unit_of_Measurement TEXT,
    Subregion TEXT,
    Country_Code TEXT
);
INSERT INTO inflation_data (RegionalMember, Year, Inflation, Unit_of_Measurement, Subregion, Country_Code)
VALUES ('United States', 2023, 3.4, 'percent', 'North America', 'US');