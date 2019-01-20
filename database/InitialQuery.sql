-- F-03: Connect mysql with Api

-- Create WhosNextUsers Table
CREATE TABLE IF NOT EXISTS WhosNextUsers
(
    Id int NOT NULL AUTO_INCREMENT, 
    Name varchar(255) NOT NULL, 
    Email varchar(255) NOT NULL, 
    PasswordHash varchar(256) NOT NULL, 
    BirthDate datetime NOT NULL, 
    Gender int NOT NULL, 
    UserId varchar(256) NOT NULL,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY (ID)
)