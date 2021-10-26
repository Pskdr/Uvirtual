mysql = require('mysql');

const execute = () => {
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'uvirtual',
        port: 3306
    });
    connection.connect(function(error){
        if(error){
            throw error;
        } else{
            console.log("Conexion correcta");
        }
    });
    return connection;
};

module.exports = {execute};