/* created 'update command' sql script */


-- Insert dummy data into Alumni table
INSERT INTO Alumni (first_name, last_name, email, password, contact_no)
VALUES
    ('John', 'Doe', 'john.doe@example.com', 'password123', '1234567890'),
    ('Jane', 'Smith', 'jane.smith@example.com', 'password456', '9876543210'),
    ('Alice', 'Johnson', 'alice.johnson@example.com', 'password789', '1231231234');

-- Insert dummy data into AlumniEducation table
INSERT INTO AlumniEducation (alumni_id, degree, passing_year, joining_year, college_name, address)
VALUES
    (1, 'Bachelor of Science in Computer Science', 2020, 2016, 'ABC University', '123 College St, City A'),
    (1, 'Master of Science in Data Science', 2022, 2020, 'XYZ University', '456 University Ave, City B'),
    (2, 'Bachelor of Business Administration', 2018, 2014, 'LMN University', '789 Business Rd, City C'),
    (3, 'Bachelor of Arts in Psychology', 2019, 2015, 'PQR College', '101 Art Ln, City D');

-- Insert dummy data into AlumniOrganization table
INSERT INTO AlumniOrganization (alumni_id, position, joining_date, leaving_date)
VALUES
    (1, 'Software Engineer', '2022-06-01', '2023-06-01'),
    (2, 'Team Lead', '2020-01-15', '2021-12-31'),
    (3, 'Manager', '2019-07-01', '2022-07-01'),
    (1, 'Data Scientist', '2023-07-01', NULL);
