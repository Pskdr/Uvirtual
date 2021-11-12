const mysql = require('../Services/mysql.service')

const registrarEstudiante = (req, res) => {
    let estudiante = req.body;
    const connnection1 = mysql.execute();
    const sqlComprobacion = `select id from estudiantes where id = "${estudiante.id}"`
    connnection1.query(sqlComprobacion, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            return res.json({
                ok: false,
                message: "No se puede registrar el estudiante, ya existe"
            })
        } else{
            try {
                let sql = `insert into estudiantes (id, nombre, correo, contrasena) values ("${estudiante.id}", "${estudiante.nombre}", "${estudiante.correo}", "${estudiante.contrasena}")`;
                const connnection2 = mysql.execute();
                connnection2.query(sql);
                return res.send({
                    ok: true,
                    message: "Estudiante registrado",
                })
            } catch (error) {
                return res.send({
                    ok: false,
                    message: error
                });
            }
        }
    })
};
//let sql = `insert into estudiantes (nombre, correo, contraseña) values ("${estudiante.nombre}", "${estudiante.correo}", "${estudiante.contraseña}")`;
const obtenerEstudiantes_NOMBRE = (req, res) => {
        let estudiante = req.body
        let sql = `select * from estudiantes where correo = "${estudiante.correo}" and contrasena = "${estudiante.contrasena}"`;
        const connection = mysql.execute();
        connection.query(sql, (error, results) => {
            if(error) throw error;
            if(results.length > 0){
                res.json({
                    "respuesta" : true
                });
                console.log("Encontrado");
            } else {
                res.send("Estudiante no encontrado");
                console.log("No encontrado");
            }
        })
};

const actualizarEstudiante = (req, res) => {
    try {
        let datos = req.body
        sql = `update estudiantes set nombre = "${datos.nombre}", correo = "${datos.correo}", contrasena = ${datos.contrasena} where id = "${datos.id}"`;
        const connection = mysql.execute();
        connection.query(sql, (error, results) => {
            if(error) res.send({message: error})
            if(results.length > 0){
                return res.send({
                    ok: true,
                    message: "Datos del estudiante actualizados correctamente",
                });
            }
            else{
                return res.send({
                    ok: true,
                    message: "no se pudieron actualizar los datos del estudiante",
                });
            }
        });
    } catch (error) {
        return res.send({
            ok: false,
            message: "ocurrió un error, no se pudo realizar la petición exitosamente"
        });
    }
};

const eliminarEstudiante = (req, res) => {
    try {
        let estudiantes = req.body;
        let sql = `delete from estudiantes where id = "${estudiantes.id}"`;
        const connection = mysql.execute();
        connection.query(sql, (error, results) => {
            if(error) res.send({message: error})
            if(results.length>0){
                return res.send({
                    ok: true,
                    message: "Estudiante eliminado correctamente"
                })
            } else{
                return res.send({
                    ok: true,
                    message: "No se puede eliminar un estudiante que no existe"
                })
            }
        });
    } catch (error) {
        return res.send({
            ok: false,
            message: "ocurrió un error, no se pudo realizar la petición exitosamente"
        })
    }
}

module.exports = {registrarEstudiante, obtenerEstudiantes_NOMBRE, actualizarEstudiante, eliminarEstudiante};