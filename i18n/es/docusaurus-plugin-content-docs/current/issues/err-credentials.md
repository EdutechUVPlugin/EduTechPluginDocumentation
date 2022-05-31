---
id: err-credentials
title: Falta de credenciales para iniciar sesión
---
ER-3: Error al crear credenciales para el inicio de sesión.

### Descripción
En el seguimiento de errores de Moodle, uno de los encargados en el equipo para revisar el plugin, nos reporta que intentaron crear una cuenta en el sitio web del repositorio institucional, sin embargo, no pudieron crearla por lo que solicitaron unas credenciales de acceso.
El mensaje completo por parte del equipo puede observarse en la siguiente figura. 

Figura:  Mensaje por parte del equipo de Moodle 
![Mensaje por correo de  miembro del equipo de revisores de Moodle explicando la necesidad de una cuenta para ingresar al plugin](/img/issues/errors/er-3-credentials.png)

### Solución
Inicialmente se les otorgó las que nos proporcionaron para las pruebas. 
- User: teacher@ups.edu.ec
- Password: USER12345
Sin embargo, era necesario que se active o revise que el sitio web funcione adecuadamente al momento de dar de alta nuevas cuentas para que el equipo de Moodle no vuelva a reportar este error.

Actualmente el equipo de desarrollo del API habilitó el registro de cuentas con correos públicos.
