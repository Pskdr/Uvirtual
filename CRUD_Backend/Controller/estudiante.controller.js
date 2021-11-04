const mysql = require('../Services/mysql.service')

const anadirEstudiante = (req, res) => {
    try {
        let estudiante = req.body;
        let sql = `insert into estudiantes (nombre, correo, contraseña) values ("${estudiante.nombre}", "${estudiante.correo}", "${estudiante.contraseña}")`;
        const connection = mysql.execute();
        connection.query(sql);
        return res.send({
            ok: true,
            message: "Estudiante Agregado"
        })
    } catch (error) {
        return res.send({
            ok: false,
            message: error
        });
    }
};

const obtenerEstudiantes_NOMBRE = (req, res) => {
        let estudiante = req.body
        let sql = `select * from estudiantes where nombre = "${estudiante.nombre}"`;
        const connection = mysql.execute();
        connection.query(sql, (error, results) => {
            if(error) throw error;
            if(results.length > 0){
                res.json(results);
            } else {
                res.send("Estudiante no encontrado");
            }
        })
};

const actualizarEstudiante = (req, res) => {
    try {
        let datos = req.body
        sql = `update estudiantes set nombre = "${datos.nombre}" where id = ${datos.id}`;
        const connection = mysql.execute();
        connection.query(sql);
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
        let identificacion = req.body;
        let sql = `delete from estudiantes where id = ${identificacion.id}`;
        const connection = mysql.execute();
        connection.query(sql);
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