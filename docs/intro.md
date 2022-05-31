---
id: intro
title: Introduction
---

There are two primary features for the “EduTech Repository” plugin in Moodle. These are:
 - Login
 - Load learning objects

First of all, to access any of the plugin's features, one must first login with a username and password belonging to a registered account at [EduTech](https://repositorio.edutech-project.org/#/register).

Learning objects are loaded from the EduTech Repository through a search. Learning objects are retrieved with search criteria. Search criteria include education level, knowledge area, and license.

There are three primary HTTP requests, and an auxiliary utility request are used to accomplish these features. 
For the Login feature, a HTTP POST request is used for security purposes, avoiding including sensitive information in the parameters of an otherwise used GET request.


- The login feature uses a single HTTP ``POST`` request. 
Syntax:
 ``POST`` request to `` /login/``


- To load learning objects, there are two versions of a single ``GET`` request.
The GET request with the popular query parameter is used to retrieve the list of all learning objects within the EduTech Repository in order from most popular first.

Syntax:
``GET`` request to `` /learning-objects/populars/``


- To search for certain learning objects, the same GET request is used; however, the query string must include at least one search criteria based on the search filters in the EduTech Repostitory as a parameter key and a numbered value. For example, it is possible to query by license and use the value 4 to search by creative commons licenses.

Syntax:
``GET`` request to `` /learning-objects/search/?license__value=4 ``

- Additionally, it is possible to query the list of search filters within the EduTech Repository used to search for learning objects to identify the keys and values available from the Repository API. 

Syntax:
``GET`` request to `` /endpoint-filter ``
