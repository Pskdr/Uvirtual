const mysql = require('../Services/mysql.service')

const anadirEstudiante = (req, res) => {
    try {
        let estudiantes = req.body;
        let sql = `inser into estudiantes (nombre) values (${estudiante.nombre})`;
        mysql.execute(sql);
        return res.send({
            ok: true,
            message: "Estudiante Agregado",
        })
    } catch (error) {
        return res.send({
            ok: false,
            message: error
        });
    }
};

const obtenerEstudiantes_NOMBRE = (req, res) => {
    try {
        let nombre = req.nombre
        let sql = `select id, nombre, from estudiantes where nombre = ${nombre}`;
        mysql.execute(sql);
        return res.send({
            ok: true,
            message: "Estudiantes encontrados",
            body: rows
        });
    } catch (error) {
        return res.send({
            ok: false,
            message: error
        });
    }
};

const actualizarEstudiante = (req, res) => {
    try {
        let datos = req.body
        sql = `update estudiantes set nombre = ${datos.nombre} where id = ${datos.id}`;
        mysql.execute(sql);
        return res.send({
            ok: true,
            message: "Estudiante actualizado correctamente",
        });
    } catch (error) {
        return res.send({
            ok: false,
            message: error
        });
    }
};

const eliminarEstudiante = (req, res) => {
    try {
        let indentificacion = req.id;
        let sql = `delete from estudiantes where id = ${identificacion}`;
        mysql.execute(sql);
        return res.send({
            ok: true,
            message: "Estudiante eliminado correctamente"
        })
    } catch (error) {
        return res.send({
            ok: false,
            message: error
        })
    }
}

module.exports = {anadirEstudiante, obtenerEstudiantes_NOMBRE, actualizarEstudiante, eliminarEstudiante};