---
id: login
title: User Login
---

To start a session, a ``POST`` request is sent towards the API with the ``email`` and ``password`` fields. The API will return a session token to grant access to further functionality within the EduTech plugin.

### Previous requirements
- Have an account registered at [EduTech](https://repositorio.edutech-project.org/#/register).
- Provide the email and password for the registered account.



HTTP request example:

```bash
POST /api/v1/login/ HTTP/1.1
Host: repositorio.edutech-project.org
Content-Type: application/json
 
{
  "email": "suryabug@example.com",
  "password": "000000"
}
```
PHP request example:

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

Expected success response example:

```json
{
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjolQjUzNDI2NTc2LCJqdGkiOiI1MjFmMTIwZmRmMmQ0MTFiODRlYjIyNTZiYjIxZTVmYSIsInVzZXJfaWQiOjd9.BM3t3WcIp0lMa-kFsrtPcCuJscf33qxNK0jUkFy6zTQ",
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjolQjUzNDI2NTc2LCJqdGkiOiI1MjFmMTIwZmRmMmQ0MTFiODRlYjIyNTZiYjIxZTVmYSIsInVzZXJfaWQiOjd9.BM3t3WcIp0lMa-kFsrtPcCuJscf33qxNK0jUkFy6zTQ"
}
```
Expected response for error handling:

Failed Response: Incorrect email or password

```json
{
    "detail": "No active account found with the given credentials"
}
```
