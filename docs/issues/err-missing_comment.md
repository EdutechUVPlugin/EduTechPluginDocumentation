---
id: err-missing_comment
title: Lack of documentation for variables
---
ER-2: There were variables in the plugin code that had no commented documentation.

### Description
This issue was present in variables associated with the EduTech API endpoints. These endpoints are used to query available learning objects. In the following figure the errors can be observed.
Figure:  Errors about lack of variable documentation
![List of the six variables not documented](/img/issues/errors/er-2-variables.png)

### Solution
Comments were added to describe variables used in functions. The standard scheme used in PHP was used to comment lines of code with the symbols “//” or “/* */”. All the instances were documentation lacked as indicated by the Moodle team were updated.

The follwing block of code shows the commented documentation for variables declared for API endpoints.
```bash
/*Endpoint to API conection*/
    private static $loginendpoint = "https://repositorio.edutech-project.org/api/v1/login/";
    /*Token validator on Edutech website*/
    private static $verifytokenendpoint = "https://repositorio.edutech-project.org/api/v1/token/verify/";
    /*Token refresh Edutech website*/
    private static $refreshtokenendpoint = "https://repositorio.edutech-project.org/api/v1/token/refresh/";
    /*GET learning objects from catalog*/
    private static $learningobjectsendpoint = "https://repositorio.edutech-project.org/api/v1/learning-objects/populars/";
    /*SEARCH function for learning objects*/
    private static $learningobjectssearchendpoint = "https://repositorio.edutech-project.org/api/v1/learning-objects/search/";
    /*FILTERS function for learning objects*/
    private static $filtersendpoint = "https://repositorio.edutech-project.org/api/v1/endpoint-filter";
```