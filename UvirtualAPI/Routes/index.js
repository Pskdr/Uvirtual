const express = require('express');
const router = express.Router();
const cursos_controller = require('../Controller/cursos.controller');

router.post("/cursos/crearCurso", cursos_controller.crearCurso);
router.get("/cursos/obtenerCurso", cursos_controller.obtenerCursos_NOMBRE);
router.put("/cursos/actualizarCurso", cursos_controller.actualizarCurso);
router.delete("/cursos/eliminarCurso", cursos_controller.eliminarCurso);

module.exports = router;