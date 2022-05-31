---
id: login
title: Inicio de sesión 
---

Se realiza un inicio de sesión al mandar una petición ``POST`` con los campos ``username`` y ``password`` 
para intentar retornar un token de sesión para accesar a la funcionalidad del plugin de EduTech.

### Requisitos previos
- Tener cuenta en [EduTech](https://repositorio.edutech-project.org/#/register).
- Conocer tu correo y contraseña de EduTech.



Ejemplo en HTTP:

```bash
POST /api/v1/login/ HTTP/1.1
Host: repositorio.edutech-project.org
Content-Type: application/json
 
{
  "email": "suryabug@example.com",
  "password": "000000"
}
```
Ejemplo en PHP:

```php
$curl = curl_init();
 
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://repositorio.edutech-project.org/api/v1/login/',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "email": "suryabug@example.com",
    "password": "000000"
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));
 
$response = curl_exec($curl);
 
curl_close($curl);
echo $response;
```

Respuesta exitosa:

```json
{
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjolQjUzNDI2NTc2LCJqdGkiOiI1MjFmMTIwZmRmMmQ0MTFiODRlYjIyNTZiYjIxZTVmYSIsInVzZXJfaWQiOjd9.BM3t3WcIp0lMa-kFsrtPcCuJscf33qxNK0jUkFy6zTQ",
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjolQjUzNDI2NTc2LCJqdGkiOiI1MjFmMTIwZmRmMmQ0MTFiODRlYjIyNTZiYjIxZTVmYSIsInVzZXJfaWQiOjd9.BM3t3WcIp0lMa-kFsrtPcCuJscf33qxNK0jUkFy6zTQ"
}
```
Manejo de Errores:

Respuesta Fallida: Campos incorrectos

```json
{
    "detail": "No active account found with the given credentials"
}
```
