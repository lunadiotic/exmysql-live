module.exports = {
    /*
    * First five parameters are for MySQL connection.
    */
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "node_mysql",
    dialect: "mysql",
    pool: {
        max: 5, // maximum number of connection in pool
        min: 0, // minimum number of connection in pool
        acquire: 30000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
        idle: 10000 // maximum time, in milliseconds, that a connection can be idle before being released
    }
};