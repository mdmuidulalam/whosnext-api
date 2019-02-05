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
);

-- F-06: Implement Add Treat

-- Create Treats Table
CREATE TABLE IF NOT EXISTS Treats
(
	Id int NOT NULL AUTO_INCREMENT, 
    AskedTo int NOT NULL,
    CONSTRAINT FK_AskedTo_WhosNextUsers FOREIGN KEY (AskedTo) REFERENCES WhosNextUsers(Id),
    AskedBy int NOT NULL,
    CONSTRAINT FK_AskedBy_WhosNextUsers FOREIGN KEY (AskedBy) REFERENCES WhosNextUsers(Id),
    Deadline datetime NOT NULL, 
    Reason varchar(256) NOT NULL, 
    Heading varchar(32) NOT NULL, 
    Confirmation int NOT NULL,
	CreateDate datetime NOT NULL,
	ConfirmationDate datetime,
	CompleteDate datetime,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY (ID)
);