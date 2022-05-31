---
id: error_handling
title: Manejo de errores
---

Al interactuar con los diferentes endpoints de la API, pueden ocurrir una serie de errores dependiendo de diferentes situaciones como enviar datos en formato incorrecto, parámetros inválidos, etc.

La estructura estándar de la respuesta JSON en estos casos es la siguiente.

Ejemplo:

```json
{
    "detail": "Page not found at endpoint"
}
```
