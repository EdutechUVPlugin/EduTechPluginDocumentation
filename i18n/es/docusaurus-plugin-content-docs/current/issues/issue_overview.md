---
id: issue_overview
title: Resumen de asuntos depurados
---

A continuación se muestra una tabla resumiendo los defectos identificados desde la codificación del plugin y una breve explicación de las acciones tomadas para atender cada asunto. 

Tabla de asuntos atendidos:

| ID    | Nombre   | Descripción                      | Fase Inyectada | Fase Detectada | Solución   |
|:------|:---------|:---------------------------------|:---------------|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Er-1  | Falta de Sintaxis Frankenstyle | No utilizar una sintaxis adecuada respecto al estándar Frankenstyle.  | Despliegue | Despliegue | Se atendieron los errores referentes al Frankenstyle donde presentaba una regla incumplida, la mayoría de ellos era sobre el uso de de letras mayúsculas  en las variables, ya que todas deben estar especificadas en minúsculas.                                                                                                       |
| Er-2  | Falta de Documentación de variables | Errores referentes a variables en el código que no fueron documentas bajo comentario.  | Diseño | Despliegue | Se añadieron comentarios en el código que permitiera describir estas variables que faltaban de documentar y que fueron marcadas por el equipo de Moodle como error                                                                                                     |
| Er-3  | Error al crear credenciales | Los revisores de Moodle no pudieron crear cuentas del repositorio EduTech para el inicio de sesión por lo que solicitaron unas credenciales de acceso.  | Diseño | Mantenimiento | El equipo de desarrollo del API habilitó el registro de cuentas con correos públicos. |
| Er-4  | Cuentas no abiertas al público general | Las cuentas del repositorio EduTech estaban restringidas a solo cuentas institucionales y se requiere de la creación de cuentas abierto al público en general para la aprobación de la publicación del Plugin.  | Despliegue | Mantenimiento | El equipo de desarrollo del API eliminó las restricciones de cuentas. Ahora se pueden crear cuentas de docente con correos institucionales y cuentas de público general con cualquier correo sujeto a una revisión por el equipo EduTech.                                                                                       |
| Er-5  | Error al cargar archivo mayor a 100 MB | Objetos de aprendizaje más grandes que 100 MB no se cargaban a Moodle.  | Requerimientos | Implementación | Incrementar el límite  de tamaño de archivos que se pueden subir a Moodle a 200 MB.                                                                                                   |
| Er-6  | Error al consultar listado de objetos de aprendizaje en PHP 8 |Se podía consultar en Moodle con PHP 7.4 el listado de objetos de aprendizaje, pero en PHP 8 se arrojaba una excepción.  | Despliegue | Mantenimiento | Se realizaron adaptaciones a las funciones de búsqueda de objetos de aprendizaje para ser compatibles en PHP 8                                                        |
| Er-7  | Error al cargar archivo en PHP 8 | La excepción surge en el archivo ``scormlib.php`` propio de Moodle debido a que la instanciación de variables en los scripts de Moodle aun no es compatible para PHP 8.  | Despliegue | Mantenimiento | Se realizaron adaptaciones a la función ``get_file`` de la clase ``lib.php``                                                                                                      |