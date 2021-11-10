const mysql = require('../Services/mysql.service')

const crearCurso = (req, res) => {
    try {
        let curso = req.body;
        let sql = `inser into cursos (nombre, tipo, cupoMaximo) values (${curso.nombre}, ${curso.tipo}, ${curso.cupoMaximo})`;
        mysql.execute(sql);
        return res.send({
            ok: true,
            message: "Curso creado",
        })
    } catch (error) {
        return res.send({
            ok: false,
            message: error
        });
    }
};

const obtenerCursos_NOMBRE = (req, res) => {
    try {
        let nombre = req.nombre
        let sql = `select id, nombre, tipo, cupoMaximo from cursos where nombre = ${nombre}`;
        mysql.execute(sql);
        return res.send({
            ok: true,
            message: "Cursos encontrados",
            body: rows
        });
    } catch (error) {
        return res.send({
            ok: false,
            message: error
        });
    }
};

const actualizarCurso = (req, res) => {
    try {
        let datos = req.body
        sql = `update cursos set nombre = ${datos.nombre}, tipo = ${datos.tipo}, cupoMaximo = ${datos.cupoMaximo} where id = ${datos.id}`;
        mysql.execute(sql);
        return res.send({
            ok: true,
            message: "Curso actualizado correctamente",
        });
    } catch (error) {
        return res.send({
            ok: false,
            message: error
        });
    }
};

const eliminarCurso = (req, res) => {
    try {
        let indentificacion = req.id;
        let sql = `delete from cursos where id = ${identificacion}`;
        mysql.execute(sql);
        return res.send({
            ok: true,
            message: "Curso eliminado correctamente"
        })
    } catch (error) {
        return res.send({
            ok: false,
            message: error
        })
    }
}

module.exports = {crearCurso, obtenerCursos_NOMBRE, actualizarCurso, eliminarCurso};
