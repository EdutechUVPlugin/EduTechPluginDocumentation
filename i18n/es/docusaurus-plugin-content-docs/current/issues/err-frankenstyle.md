---
id: err-frankenstyle
title: Falta de Sintaxis Frankenstyle
---

ER-1: No utilizar una sintaxis adecuada respecto al estándar Frankenstyle.

### Descripción
En la primera revisión para ser evaluado por el equipo de Moodle, uno de los errores presentados fue el no utilizar una sintaxis adecuada respecto al estándar Frankenstyle.

Los archivos que presentaban este tipo de error fueron:
- edutech.php
- requester.php
- access.php
- repository_edutech.php
- lib.php
- edutech_test.php
- version.php

### Solución
Se atendieron los errores referentes al Frankenstyle donde presentaba una regla incumplida, la mayoría de ellos como se aprecia en la Figura de abajo. Era sobre la declaración de variables, ya que todas deben estar especificadas en minúsculas.

Figura:  Errores de la sintaxis Frankenstyle
![Listado de las fallas de Frankenstyle](/img/issues/errors/er-1-frankenstyle.png)

Otros errores presentados por parte de la sintaxis eran que, al manejar espacios en el código, estos no son permitidos por parte de las reglas establecidas por el compilador Moodle, por lo que entre función y función se eliminaron líneas de salto y a su vez, espacios en blanco entre signos como paréntesis y llaves de apertura.

