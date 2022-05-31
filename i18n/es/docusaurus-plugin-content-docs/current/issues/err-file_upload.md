---
id: err-file_upload
title: Error al cargar archivo en PHP 8
---
ER-7: Excpeción al cargar paquete SCORM a curso en Moodle con PHP 8.

### Descripción
La excepción surge en el archivo ``scormlib.php`` propio de Moodle debido a que la instanciación de variables en los scripts de Moodle aun no es compatible para PHP 8 y por lo tanto la función ``count()`` del script ``scormlib.php`` no funciona correctamente.
Con los ajustes para correr en 8 ya están, sin embargo, el entorno Moodle en PHP 8 al estar en estatus de desarrollo aún no cuenta con estabilidad suficiente para el funcionamiento adecuado del EduTech Plugin.

Adicionalmente, se estuvo realizando pruebas con la versión compatible con PHP 8 del plugin en un ambiente local de Moodle con PHP 7.4 instalado. En este ambiente, el plugin sigue funcionando correctamente 


Figura:  Excepción de falla de instanciación de variable para ``count()`` en ``scormlib.php``
![Excepción arrojada en Moodle con PHP 8](/img/issues/errors/er-6-upload.png)

En el siguiente bloque de texto se puede ver el log de la primera vez que se replicó el error en un ambiente local.

```bash
[Fri Jan 28 17:48:46.667239 2022] [php:notice] [pid 7864:tid 1876] [client ::1:64803] Default exception handler: Exception - count(): Argument 1 ($value) must be of type Countable|array, null given Debug: \r\nError code: generalexceptionmessage\n* line 571 of \\mod\\scorm\\datamodels\\scormlib.php: TypeError thrown\n* line 300 of \\mod\\scorm\\locallib.php: call to scorm_parse_scorm()\n* line 171 of \\mod\\scorm\\lib.php: call to scorm_parse()\n* line 128 of \\course\\modlib.php: call to scorm_add_instance()\n* line 168 of \\course\\modedit.php: call to add_moduleinfo()\n, referer: http://localhost/moodle/course/modedit.php?add=scorm&type=&course=1&section=1&return=0&sr=0
```

### Solución
Se realizaron adaptaciones a la función ``get_file`` de la clase ``lib.php`` del plugin similar a la solución para Er-6 Error al consultar listado de objetos de aprendizaje.


Después de corregir estas fallas, se logró cargar objetos de aprendizaje a cursos en las versiones PHP 7.4 y PHP 8.1. 