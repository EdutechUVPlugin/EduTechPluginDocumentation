---
id: nofilter
title: Show list of Learning Objects
position: 1
---

To retrieve a list of all learning objects available within the EduTech Repository, a ``GET`` request towards ``/learning-objects/populars/`` with an empty query string is used.

HTTP request example:

```bash
GET /api/v1/learning-objects/populars/ HTTP/1.1
Host: repositorio.edutech-project.org
Authorization: e3460519d91b0d7c0320e8ae2a4112ce863e62f6be6d39ff58e2fda19a1995a8
```

PHP request example:

```php
$curl = curl_init();
 
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://repositorio.edutech-project.org/api/v1/learning-objects/populars/',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'Authorization: e3460519d91b0d7c0320e8ae2a4112ce863e62f6be6d39ff58e2fda19a1995a8'
  ),
));
 
$response = curl_exec($curl);
 
curl_close($curl);
echo $response;
```

Expected success response example:

```json
[
  {
    "learning_object": {
      "id": 1,
      "user_created": {
          "first_name": "Damian",
          "last_name": "Samaniego"
      },
      "created": "2021-11-09T13:59:00.627590Z",
      "general_title": "Estructura perteneciente al Claustro de Programación",
      "general_description": "Objeto de aprendizaje George Boole quien fue un famoso matemático de origen inglés que publicó un tratado sobre las leyes del pensamiento, el cual sustenta las teorías de la lógica y la probabilidad.",
      "slug": "estructura-perteneciente-al-claustro-de-programacion51018",
      "avatar": "http://repositorio.edutech-project.org/media/avatar/8146153622_9d29b47980_ADhxGbp.jpg",
      "knowledge_area": {
        "name": "Educación"
      }
    },
    "rating": 2
  }
]
```