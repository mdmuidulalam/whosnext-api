var config = {};

///Database Seetings
config.database = {};
config.database.host = "remotemysql.com";
config.database.port = 3306;
config.database.name = "DapPOhT82m";
config.database.user = "DapPOhT82m";
config.database.password = "qYD00SyPhF";
config.database.dialect = "mysql";

///Password Salt Code
config.password = {};
config.password.salt = 12;

/// JWT JWT_SECRET
config.jwt = {};
config.jwt.secret = "axq6f51";
config.jwt.maxAge = 3600;

module.exports = config;
