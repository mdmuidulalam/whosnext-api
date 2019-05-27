var config = {};

///Database Seetings
config.database = {};
config.database.host = "remotemysql.com";
config.database.port = 3306;
config.database.name = "Oq9badrNFw";
config.database.user = "Oq9badrNFw";
config.database.password = "HV4AfVmLMA";
config.database.dialect = "mysql";

///Password Salt Code
config.password = {};
config.password.salt = 12;

/// JWT JWT_SECRET
config.jwt = {};
config.jwt.secret = "axq6f51";
config.jwt.maxAge = 3600;

module.exports = config;
