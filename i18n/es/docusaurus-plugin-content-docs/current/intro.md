---
id: intro
title: Introducción
---

Para el plugin “Repository_EduTech” existen dos funcionalidades principales:
 - Inicio de sesión
 - Cargar objetos de aprendizaje

Para iniciar sesión se ingresan las credenciales de una cuenta de [EduTech](https://repositorio.edutech-project.org/#/register).

Para cargar objetos de aprendizaje se consultan los filtros y objetos de aprendizaje guardados dentro de la API de EduTech.

Para implementar estas funcionalidades se tienen tres peticiones principales y una auxiliar, dónde para inicio de sesión se utiliza una petición POST de HTTP por fines de seguridad.


- Para inicio de sesión se utiliza una petición ``POST`` de HTTP por cuestiones de seguridad. 
Sintaxis:
Petición ``POST`` a `` /login``


- Para cargar objetos de aprendizaje se utilizan dos versiones de una petición ``GET`` diferentes.
La petición GET por defecto contiene un parámetro en el Query String ``/populars/`` sirve para consultar toda la lista de objetos de aprendizajes en el repositorio por orden de popularidad.

Sintaxis:
Petición ``GET`` a `` learning-objects/populars/``


- Para filtrar objetos de aprendizaje se utiliza la misma estructura, pero se agrega un campo en el Query String para consultar objetos de aprendizajes específicos bajo una búsqueda filtrada basados en los filtros del repositorio. Por ejemplo, se puede filtrar por licencia como llave de parámetro y con el número 2 como valor para mostrar objetos de aprendizaje con licencia Creative Commons. 

Sintaxis:
Petición ``GET`` a `` /learning-objects/search/?license__value=4``

-  Adicionalmente, se puede consultar la lista de filtros de búsqueda de objetos de aprendizaje dentro del repositorio utilizados para obtener las rutas para consultar los tipos de filtros disponibles y sus valores posibles para realizar búsquedas de objetos de aprendizaje.

Sintaxis:
Petición ``GET`` a `` /endpoint-filter ``
