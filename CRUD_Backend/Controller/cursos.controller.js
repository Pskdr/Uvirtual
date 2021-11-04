const mysql = require('../Services/mysql.service')

const crearCurso = (req, res) => {
    try {
        let curso = req.body;
        let sql = `inser into cursos (nombre, tipo, cupoMaximo) values ("${curso.nombre}", "${curso.tipo}", ${curso.cupoMaximo})`;
        const connnection = mysql.execute();
        connection.query(sql);
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
        let nombre = req.nombre
        let sql = `select id, nombre, tipo, cupoMaximo from cursos where nombre = "${nombre}"`;
        const connection = mysql.execute();
        connection.query(sql, (error, results) => {
            if(error) throw error;
            if(results.length > 0){
                res.json(results);
            } else {
                res.send("curso no encontrado");
            }
        })
};

const actualizarCurso = (req, res) => {
    try {
        let datos = req.body
        sql = `update cursos set nombre = "${datos.nombre}", tipo = "${datos.tipo}", cupoMaximo = ${datos.cupoMaximo} where id = ${datos.id}`;
        const connection = mysql.execute();
        connection.query(sql);
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
        let curso = req.body;
        let sql = `delete from cursos where id = ${curso.id}`;
        const connection = mysql.execute();
        connection.query(sql);
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
