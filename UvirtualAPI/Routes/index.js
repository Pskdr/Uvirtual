const express = require('express');
const router = express.Router();
const cursos_controller = require('../Controller/cursos.controller');
const estudiante_controller = require('../Controller/estudiante.controller');
const profesor_controller = require('../Controller/profesor.controller');


// Routes Cursos
router.post("/cursos/crearCurso", cursos_controller.crearCurso);
router.get("/cursos/obtenerCurso", cursos_controller.obtenerCursos_NOMBRE);
router.put("/cursos/actualizarCurso", cursos_controller.actualizarCurso);
router.delete("/cursos/eliminarCurso", cursos_controller.eliminarCurso);

//Routes Estudiantes
router.post("/estudiantes/anadirEstudiante", estudiante_controller.anadirEstudiante);
router.get("/estudiantes/obtenerEstudiante", estudiante_controller.obtenerEstudiantes_NOMBRE);
router.put("/estudiantes/actualizarEstudiante", estudiante_controller.actualizarEstudiante);
router.delete("/estudiantes/eliminarEstudiante", estudiante_controller.eliminarEstudiante);


//Routes Profesores
router.post("/profesores/anadirProfesor", profesor_controller.anadirProfesor);
router.get("/profesores/obtenerProfesor", profesor_controller.obtenerProfesores_NOMBRE);
router.put("/profesores/actualizarProfesor", profesor_controller.actualizarProfesor);
router.delete("/profesores/eliminarProfesor", profesor_controller.eliminarProfesor);


module.exports = router;