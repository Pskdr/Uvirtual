const mysql = require('../Services/mysql.service')

const anadirProfesor = (req, res) => {
    try {
        let profesor = req.body;
        let sql = `inser into profesores (nombre) values (${profesor.nombre})`;
        mysql.execute(sql);
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
    try {
        let nombre = req.nombre
        let sql = `select id, nombre, from profesores where nombre = ${nombre}`;
        mysql.execute(sql);
        return res.send({
            ok: true,
            message: "Profesores encontrados",
            body: rows
        });
    } catch (error) {
        return res.send({
            ok: false,
            message: error
        });
    }
};

const actualizarProfesor = (req, res) => {
    try {
        let datos = req.body
        sql = `update profesores set nombre = ${datos.nombre} where id = ${datos.id}`;
        mysql.execute(sql);
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
        mysql.execute(sql);
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