var config = {};

///Database Seetings
config.database = {};
config.database.host = 'localhost';
config.database.port = 3306;
config.database.name = 'whosnextdb';
config.database.user = 'sa';
config.database.password = '12345';
config.database.dialect = 'mysql';

///Password Salt Code
config.password = {};
config.password.salt = 12;

module.exports = config;