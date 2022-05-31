---
id: err-file_too_big
title: Error al cargar archivo mayor a 100 MB
---
ER-5: Objetos de aprendizaje más grandes que 100 MB no se cargaban a Moodle.

### Descripción
Durante codificación surgió una falla debido a que se subió al repositorio EduTech un objeto de aprendize conteniendo un curso sobre Covid-19. Este archivo era mayor a 100 MB. Durante el diseño del plugin no se tomo en cuenta como requisito de software el tamaño limite de paquetes SCORM. Por defecto no se pueden subir archivos mayores a 20 MB a Moodle. 

### Solución
Se puede incrementar el limite de tamaño de archivos que se pueden subir a Moodle. Dentro del archivo de configuración de Moodle ``php.ini`` se cambiaron las varialbes de limite de recurso de PHP para incrementar el tamaño de archivos aceptados que originalmente era por defecto 20 MB a 200 MB al igual que incrementar el tiempo de respuesta para evitar que surja una excepción de tiempo a 120 segundos comparado con el tiempo limite original de 60 segundos. Debido a que esta configuración de tamaño es una preferencia que puede variar entre usuarios, cada uno debe de editar sus configuraciones de Moodle para reflejar sus necesidades en cuanto al limite de archivos que pueden manejar en sus cursos.

En el siguiente bloque de código se puede ver la sección del php.ini en donde se congiguran las variables de limite de recursos.

```bash
;;;;;;;;;;;;;;;;;;;
; Resource Limits ;
;;;;;;;;;;;;;;;;;;;

; Maximum execution time of each script, in seconds
max_execution_time=120
max_input_time=120
; How many GET/POST/COOKIE input variables may be accepted
max_input_vars=5000

; Maximum amount of memory a script may consume
memory_limit=512M

;;;;;;;;;;;;;;;;
; File Uploads ;
;;;;;;;;;;;;;;;;

; Maximum allowed size for uploaded files.
; http://php.net/upload-max-filesize
upload_max_filesize=200M
```