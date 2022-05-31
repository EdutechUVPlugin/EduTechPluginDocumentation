---
id: err-bad_package_structure
title: Paquetes SCORM con estructura errónea
---
ER-8: Excpeción al cargar paquete SCORM a curso en Moodle con PHP 8.

### Descripción
Al intentar subir a un curso en Moodle con PHP 8.1 ocurre una excepción debido a que no se encuentra estructurado correctamente el archivo manifest.xml dentro de los objetos de aprendizaje del sitio EduTech. Al investigar se descubrió que solo el paquete del curso de COVID-19 esta bien estructurado y por lo tanto no mostraba errores. Probando en Moodle con PHP 7.4, las expcepciones no se propagaban pero igualmente no se podía visualizar el paquete SCORM. En la siguiente figura se puede ver la excepción arrojada.


Figura:  Excepción de falla de instanciación de variables en PHP 8.1
![Excepción arrojada en Moodle con PHP 8 al visualizar el contenido de un curso](/img/issues/errors/er-8-elements.png)

En el siguiente bloque de texto se puede ver el log al replicar el error en un ambiente local.

```bash
[Thu Mar 17 16:24:11.525374 2022] [php:notice] [pid 18632:tid 1888] [client ::1:60586] Default exception handler: Exception - array_keys(): Argument 1 ($array) must be of type array, null given Debug: \r\nError code: generalexceptionmessage\n* line 1736 of \\mod\\scorm\\locallib.php: TypeError thrown\n* line 1736 of \\mod\\scorm\\locallib.php: call to array_keys()\n* line 1654 of \\mod\\scorm\\locallib.php: call to scorm_get_toc_get_parent_child()\n* line 1944 of \\mod\\scorm\\locallib.php: call to scorm_get_toc_object()\n* line 971 of \\mod\\scorm\\locallib.php: call to scorm_get_toc()\n* line 177 of \\mod\\scorm\\view.php: call to scorm_print_launch()\n, referer: http://localhost/moodle/?redirect=0
```

Aunque solo en PHP 8 se manifestaban excepciones, en ambas versiones de Moodle el paquete SCORM cargado a un curso se mostraba vacío como en la siguiente figura. 

Figura:  Visualización de paquete con mala estructura en Moodle
![Curso en Moodle con paquete SCORM aparentemente vacío](/img/issues/errors/er-8-empty.png)

### Solución
Se descargaron los archivos ZIP de objetos de aprendizaje a un ambiente local. Después se importaron a ExeLearning y se visualizaron correctamente. Con la ayuda de este programa de creación de objetos de aprendizaje se exportaron como paquete SCORM los archivos y se cargaron a Moodle correctamente. 

En la siguiente figura se puede ver que se visualiza correctamente en ExeLearning el paquete importado del plugin.

Figura:  Visualización de paquete de aprendizaje en Exelarning
![Interfaz de paquete importado en ExeLearning mostrando un curso de lógica proposicional](/img/issues/fixes/er-8-exelearning.png)


En la siguiente figura se puede ver que se visualiza correctamente en Moodle el paquete una vez exportado de ExeLearning como paquete SCORM y se carga a un curso en Moodle.

Figura:  Visualización de paquete de aprendizaje en Exelarning
![Interfaz de paquete importado en un curso de Moodle mostrando un curso de lógica proposicional](/img/issues/fixes/er-8-moodle.png)

Se redactó un reporte de error al equipo de Ecuador y se comentó en una reunión la propuesta de solución.
La propuesta incluye exportar como paquete tipo SCORM de la herramienta de creación de objetos de aprendizaje ExeLearning y resubirlos al sitio EduTech para poder consumiir los recursos con estructura adecuada en el plugin por medio de la API de EduTech.

