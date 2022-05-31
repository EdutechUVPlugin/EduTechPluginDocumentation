---
id: search-criteria
title: Búsqueda de objetos de aprendizaje 
---

Para filtrar el listado, basta con realizar un ``GET`` a ``/learning-objects/search/``
y especificar los filtros en la query string. Se puede buscar por los criterios: licencia de objeto de aprendizaje con ``license__value`, nivel de educación con ``education_levels__id`` , y área de conocimiento de objetos de aprendizaje con ``knowledge_area__id``.Los valores para los parámetros están mapeados a valores de los filtros de búsqueda posibles en la sección de mostrar filtros de búsqueda.


Ejemplo en HTTP:

```bash
GET /api/v1/learning-objects/search/?license__value=4 HTTP/1.1
Host: repositorio.edutech-project.org
Authorization: e3460519d91b0d7c0320e8ae2a4112ce863e62f6be6d39ff58e2fda19a1995a8
```

Ejemplo en PHP:
```php
$curl = curl_init();
 
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://repositorio.edutech-project.org/api/v1/learning-objects/search/?license__value=4',
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

Respuesta exitosa:

```json
{
    "count": 1,
    "links": {
        "next": null,
        "previous": null
    },
    "pages": 1,
    "results": [
        {
            "id": 1,
            "license": {
                "id": 1,
                "name": "No especificado",
                "value": "unknown"
            },
            "learning_object_file": {
                "id": 1,
                "created": "2022-05-19T04:32:28.007080Z",
                "modified": "2022-05-19T04:32:28.054176Z",
                "file": "http://repositorio.edutech-project.org/media/oazip/SolidosdeRevolucion.zip.zip",
                "url": "https://repositorio.edutech-project.org/media/catalog/SolidosdeRevolucion16348/index.html",
                "file_name": "SolidosdeRevolucion",
                "file_size": 2344,
                "path_origin": "/var/www/proyecto.com/roabackend/media/catalog/SolidosdeRevolucion16348"
            },
            "education_levels": {
                "id": 2,
                "name": "Educación secundaria"
            },
            "knowledge_area": {
                "id": 2,
                "name": "Educación",
                "description": "Formación de personal docente para: educación preescolar; jardines de infancia; escuelas elementales; asignaturas profesionales, prácticas y no profesionales; educación de adultos; formación de personal docente; formación de maestros de niños minusválidos. Programas generales y especializados de formación de personal docente. Ciencias de la educación: elaboración de programas de estudio de materias no profesionales y profesionales. Evaluación de conocimientos, pruebas y mediciones, investigaciones sobre educación; otros programas relacionados con las ciencias de la educación."
            },
            "user_created": {
                "first_name": "Merced",
                "last_name": "Lopez",
                "image_url": "https://repositorio.edutech-project.org/media/img/user.png"
            },
            "rating": 4,
            "created": "2022-05-19T04:32:57.968127Z",
            "modified": "2022-05-19T04:36:23.102572Z",
            "adaptation": "no",
            "avatar": "http://repositorio.edutech-project.org/media/avatar/Solidos.jpg",
            "author": null,
            "package_type": null,
            "general_catalog": null,
            "general_entry": null,
            "general_title": "OA_aplicacin_de_Integral",
            "general_language": "es",
            "general_description": "Identificar los elementos conceptuales involucrados en la construcción de sólidos de revolución.",
            "general_keyword": "Integral",
            "general_coverage": "",
            "general_structure": "",
            "general_aggregation_Level": null,
            "life_cycle_version": "",
            "life_cycle_status": "",
            "life_cycle_role": null,
            "life_cycle_entity": null,
            "life_cycle_dateTime": null,
            "life_cycle_description": null,
            "meta_metadata_catalog": "",
            "meta_metadata_entry": "",
            "meta_metadata_role": null,
            "meta_metadata_entity": "BEGIN:VCARD VERSION:3.0 FN:Mgtr. Jackeline Morquecho EMAIL;TYPE=INTERNET: ORG: END:VCARD",
            "meta_metadata_dateTime": null,
            "meta_metadata_description": null,
            "technical_format": "",
            "technical_size": 0,
            "technical_location": "",
            "technical_requirement_type": "",
            "technical_requirement_name": "",
            "technical_requirement_minimumVersion": "",
            "technical_installationRremarks": "",
            "technical_otherPlatformRequirements": "",
            "technical_dateTime": "",
            "technical_description": "",
            "educational_interactivityType": "",
            "educational_learningResourceType": null,
            "educational_interactivityLevel": "",
            "educational_semanticDensity": "",
            "educational_intendedEndUserRole": null,
            "educational_context": "",
            "educational_typicalAgeRange": "5-100",
            "educational_difficulty": "",
            "educational_typicalLearningTime_dateTime": "",
            "educational_typicalLearningTime_description": "",
            "educational_description": "",
            "educational_language": "es",
            "educational_procces_cognitve": "",
            "rights_cost": "",
            "rights_copyrightAndOtherRestrictions": "",
            "rights_description": "",
            "relation_kind": "",
            "relation_catalog": "",
            "relation_entry": "",
            "relation_description": "",
            "annotation_entity": "",
            "annotation_date_dateTime": "",
            "annotation_date_description": "",
            "annotation_description": "",
            "annotation_modeaccess": "",
            "annotation_modeaccesssufficient": "",
            "annotation_rol": null,
            "classification_purpose": "",
            "classification_taxonPath_source": "",
            "classification_taxonPath_taxon": "",
            "classification_description": "",
            "classification_keyword": "",
            "accesibility_summary": "",
            "accesibility_features": "",
            "accesibility_hazard": "",
            "accesibility_control": "",
            "accesibility_api": "",
            "slug": "oa_aplicacin_de_integral16583",
            "public": true
        }
    ]
}
```

Manejo de Errores:

Respuesta Fallida: Un filtro inválido es ingresado al Query String.

```json
{
    "count": 0,
    "links": {
        "next": null,
        "previous": null
    },
    "pages": 1,
    "results": []
}
```

