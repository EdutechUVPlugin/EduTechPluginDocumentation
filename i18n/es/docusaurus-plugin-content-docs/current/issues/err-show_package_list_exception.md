---
id: err-show_package_list_exception
title: Error al consultar listado de objetos de aprendizaje
---
ER-6: Error al consultar listado de objetos de aprendizaje en el API en un servidor remoto.

### Descripción
Una vez iniciada una  sesión de EduTech en el plugin, al seleccionar los filtros de objetos de aprendizaje disponibles un usuario se enfrenta con una ventana emergente con el mensaje ``error/invalidPage``. Dicho error se puede ver en la siguiente figura en el servidor remoto proporcionado por el equipo de Aguascalientes que corre Moodle en PHP 8.0.9.

Figura:  Error al consultar objetos de aprendizaje en servidor Aguascalientes 
![Ventana emergente con error](/img/issues/errors/er-5-invalid.png)

En el siguiente bloque de texto se puede ver el log de replicación del error en un ambiente local.

```bash
[Tue Jan 25 20:53:52.542154 2022] [php:notice] [pid 13540:tid 1872] [client ::1:54315] Default exception handler: error/Invalid page. Debug: \r\nError code: Invalid page.\r\n$a contents: \n* line 137 of \\repository\\edutech\\classes\\edutech.php: repository_exception thrown\n* line 210 of \\repository\\edutech\\lib.php: call to repository_edutech\\edutech::get_learning_objects()\n* line 192 of \\repository\\edutech\\lib.php: call to repository_edutech->search_content()\n* line 130 of \\repository\\repository_ajax.php: call to repository_edutech->search()\n, referer: http://localhost/moodle/course/modedit.php?add=scorm&type=&course=1&section=1&return=0&sr=0
```
El error se manifesta en el archivo ``lib.php`` del plugin en la función ``get_learning_objects`` como se puede ver en la figura de abajo.
Figura: Función get_learning_objects
![Bloque de código donde ocurre el error y se arroja una excepción](/img/issues/errors/er-5-get_learning_objects.png)

Tras una depuración se descubrió que las incompatibilidades existen  en los archivos ``edutech.php`` y ``lib.php``. Ambas son clases que forman parte del plugin. Estas clases exhiben excepciones debido a la diferencia de instanciación de variables en PHP 8. Debido a esta diferencia entre PHP 7 y PHP 8, las variables de filtros y páginas de búsqueda no se estaban capturando y por lo tanto fallaban funciones como ``count()``y ``http_build_query()`` para construir peticiones al repositorio EduTech.

### Solución
Se realizaron adaptaciones a la función ``get_learning_objects`` de la clase ``edutech.php`` y ``search_content`` de la clase ``lib.php``. Ambas son clases del plugin

En el siguiente bloque de código se puede ver el cambio realizado a la función ``get_learning_objects``.

```bash
public static function get_learning_objects($page, $filters = []){
        global $SESSION;
        if (!self::is_authenticated()){
            throw new \repository_exception(get_string("unauthenticated", "repository_edutech"));
        }
        $url = self::$learningobjectsendpoint;
        $filtersquery = http_build_query($filters);
        if (strlen($filtersquery) > 0){
            $filtersquery = "&" . $filtersquery;
            $url = self::$learningobjectssearchendpoint;
        }
        $requester = new requester($url . "?page=$page" . $filtersquery);
        $response = $requester->get([
            "Authorization: " . $SESSION->edutech->access_token,
            "Accept-Language: " . explode("_", current_language())[0]
        ]);
        if ($requester->response_code != 200){
            if (isset($response["detail"])){
                throw new \repository_exception($response["detail"]);
            }
            throw new \repository_exception(get_string("unavailableapi", "repository_edutech"));
        }
        return $response;
    }
```

Después de corregir estas fallas, se logró consultar correctamente en el listado de objetos de aprendizaje.
