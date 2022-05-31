---
id: error_handling
title: Error Handling
---
By connecting to the different endpoints in the API, it is possible to run into an error depending on different situations. For example, sending data in an incompatible format or using non-existent parameters, etc.

The standard structure for a JSON response in these cases is as follows.

Error handling JSON response structure:

```json
{
    "detail": "Page not found at endpoint"
}
```
