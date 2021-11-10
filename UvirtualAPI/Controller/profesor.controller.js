const mysql = require('../Services/mysql.service')

const anadirProfesor = (req, res) => {
    try {
        let profesor = req.body;
        let sql = `inser into profesores (nombre) values (${profesor.nombre})`;
        const connection = mysql.execute();
        connection.query(sql);
        return res.send({
            ok: true,
            message: "Profesor Agregado",
        })
    } catch (error) {
        return res.send({
            ok: false,
            message: error
        });
    }
};

const obtenerProfesores_NOMBRE = (req, res) => {
        let nombre = req.nombre
        let sql = `select id, nombre, from profesores where nombre = ${nombre}`;
        const connection = mysql.execute();
        connection.query(sql, (error, results) => {
            if(error) throw error;
            if(results.length > 0){
                res.json(results);
            } else {
                res.send("Profesor no encontrado");
            }
        })
};

const actualizarProfesor = (req, res) => {
    try {
        let datos = req.body
        sql = `update profesores set nombre = ${datos.nombre} where id = ${datos.id}`;
        const connection = mysql.execute();
        connection.query(sql);
        return res.send({
            ok: true,
            message: "Profesor actualizado correctamente",
        });
    } catch (error) {
        return res.send({
            ok: false,
            message: error
        });
    }
};

const eliminarProfesor = (req, res) => {
    try {
        let indentificacion = req.id;
        let sql = `delete from profesores where id = ${identificacion}`;
        const connection = mysql.execute();
        connection.query(sql);
        return res.send({
            ok: true,
            message: "profesor eliminado correctamente"
        })
    } catch (error) {
        return res.send({
            ok: false,
            message: error
        })
    }
}

module.exports = {anadirProfesor, obtenerProfesores_NOMBRE, actualizarProfesor, eliminarProfesor};