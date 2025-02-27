USE CorporateDB;

-- Create the employees table with the specified columns and constraints
CREATE TABLE employees (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    joining_date VARCHAR(10) NOT NULL,
    role VARCHAR(50)
);
