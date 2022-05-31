---
id: filterkey
title: Show search criteria
---

To obtain a list of available search criteria endpoints to query for specific learning objects in the EduTech Repository, a ``GET`` HTTP request towards ``/endpoint-filter`` is necessary. The available filters are for License, Education Level, and Knowledge Area.


HTTP request example:

```bash
GET /api/v1/endpoint-filter HTTP/1.1
Host: repositorio.edutech-project.org
Accept-Language: en
Authorization: e3460519d91b0d7c0320e8ae2a4112ce863e62f6be6d39ff58e2fda19a1995a8
```

PHP request example:

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

Expected Success response example:

```json
[
  {
    "name": "License",
    "endpoint": "https://repositorio.edutech-project.org/api/v1/license"
  },
  {
    "name": "Education Level",
    "endpoint": "https://repositorio.edutech-project.org/api/v1/education-level"
  },
  {
    "name": "Knowledge area",
    "endpoint": "https://repositorio.edutech-project.org/api/v1/knowledge-area"
  }
]
```