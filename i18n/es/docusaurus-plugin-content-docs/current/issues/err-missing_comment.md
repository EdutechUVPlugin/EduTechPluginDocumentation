---
id: err-missing_comment
title: Falta de Documentación de variables
---
ER-2: Errores referentes a variables en el código que no fueron documentas bajo comentario.

### Descripción
Este error presenta variables regularmente asociadas a los puntos de conexión con la API de Edutech para recuperar los objetos de aprendizaje (OA), son variables como la de loginendpoint y similares. (Ver siguiente figura)

Figura:  Errores de variables no documentadas
![Listado de seis variables no documentadas](/img/issues/errors/er-2-variables.png)

### Solución
Se añadieron comentarios en el código que permitiera describir estas variables que faltaban de documentar y que fueron marcadas por el equipo de Moodle como error.
En algunas líneas de código donde aparece por primera vez la variable, se han añadido comentario bajo el esquema utilizado por PHP a través de símbolos “//” o “/* */”.

En el siguiente bloque de código se puede ver los comentarios de documentación.
```bash
/*Endpoint to API conection*/
    private static $loginendpoint = "https://repositorio.edutech-project.org/api/v1/login/";
    /*Token validator on Edutech website*/
    private static $verifytokenendpoint = "https://repositorio.edutech-project.org/api/v1/token/verify/";
    /*Token refresh Edutech website*/
    private static $refreshtokenendpoint = "https://repositorio.edutech-project.org/api/v1/token/refresh/";
    /*GET learning objects from catalog*/
    private static $learningobjectsendpoint = "https://repositorio.edutech-project.org/api/v1/learning-objects/populars/";
    /*SEARCH function for learning objects*/
    private static $learningobjectssearchendpoint = "https://repositorio.edutech-project.org/api/v1/learning-objects/search/";
    /*FILTERS function for learning objects*/
    private static $filtersendpoint = "https://repositorio.edutech-project.org/api/v1/endpoint-filter";
```