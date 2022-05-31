---
id: err-missing_xml_in_scorm_package
title: Objeto de aprendizaje sin XML de estructura
---
ER-9: Falla al cargar paquete SCORM titulado ´Sistema Financiero´. 

### Descripción
Al intentar subir a un curso el paquete SCORM del objeto de aprendizaje ´Sistema Financiero´ ocurre un error debido a la falta de un archivo llamado manifest.xml. En la siguiente figura se puede ver el error.


Figura:  Error al cargar paquete SCORM de ´Sistema Financiero´
![Excepción arrojada en Moodle con PHP 8.1 indicando que hace falta el archivo manifest.xml](/img/issues/errors/er-9-xml.png)

Este error ocurre en versiones de Moodle con PHP 7.4 y PHP 8.1. Al investigar la estrucutra del archivp se puede ver que efectivamente hace falta de este archivo manifest.xml que contiene el objeto de aprendizaje de COVID-19 estructurado correctamente.

### Solución
Se redactó un reporte de error al equipo de Ecuador y se comentó en una reunión la propuesta de solución.
La propuesta incluye exportar como paquete tipo SCORM de la herramienta de creación de objetos de aprendizaje ExeLearning y resubirlos al sitio EduTech para poder consumiir los recursos con estructura adecuada en el plugin por medio de la API de EduTech.
