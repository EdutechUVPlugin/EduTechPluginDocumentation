---
id: filterkey
title: Mostrar filtros de objetos de aprendizaje
---

Para consultar los tipos de filtros de objetos de aprendizaje en el repositorio, basta con realizar un ``GET`` a ``/endpoint-filter``. Los filtros disponibles son Licencia, Área de conocimiento, y Nivel de educación.


Ejemplo en HTTP:

```bash
GET /api/v1/endpoint-filter HTTP/1.1
Host: repositorio.edutech-project.org
Accept-Language: en
Authorization: e3460519d91b0d7c0320e8ae2a4112ce863e62f6be6d39ff58e2fda19a1995a8
```

Ejemplo en PHP:

```php
$curl = curl_init();
 
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://repositorio.edutech-project.org/api/v1/endpoint-filter',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'Accept-Language: en',
    'Authorization: e3460519d91b0d7c0320e8ae2a4112ce863e62f6be6d39ff58e2fda19a1995a8'
  ),
));
 
$response = curl_exec($curl);
 
curl_close($curl);
echo $response;
```

Respuesta exitosa:

```json
[
    {
        "name": "Licencia",
        "endpoint": "https://repositorio.edutech-project.org/api/v1/license"
    },
    {
        "name": "Nivel educativo",
        "endpoint": "https://repositorio.edutech-project.org/api/v1/education-level"
    },
    {
        "name": "Área de conocimiento",
        "endpoint": "https://repositorio.edutech-project.org/api/v1/knowledge-area"
    }
]
```
