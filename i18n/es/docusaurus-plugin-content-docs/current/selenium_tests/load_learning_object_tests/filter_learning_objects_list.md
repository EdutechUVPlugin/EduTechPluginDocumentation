---
id: filter_learning_objects_list
title: CP-04. Filtrar lista de objetos de aprendizaje
---

Descripción del caso de prueba:

| ID                     | CP-04                                                                                                                                                                             |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nombre                 | Filtrar lista de objetos de aprendizaje                                                                                                                                           |
| Condiciones de entrada | <ul><li>El docente debe tener una sesión del repositorio activa.</li></ul>                                                                                                        |
| Entradas de datos      | Ninguna                                                                                                                                                                           |
| Entradas               | <ol><li>El docente selecciona un filtro y pulsa el botón Filtrar.</li><li>El plugin envía la petición a la API REST y recibe el nuevo listado de objetos de aprendizaje.</li></ol>|
| Salidas esperadas      | Se muestra la lista de objetos de aprendizaje filtrada.                                                                                                                           |

Script de Selenium:
```cs
[Test]
public void CP04_Filter_Learning_Objects_List() {
    var element = driver.FindElement(By.Id("menuselect_license_filter"));
    SelectElement select = new SelectElement(element);
    select.SelectByIndex(4);
    driver.FindElement(By.ClassName("filter_btn")).Click();
    WaitForLoadingToAppear();
    WaitForLoading();
    var learningObjects = driver.FindElement(By.ClassName("fp-iconview")).FindElements(By.ClassName("fp-file"));
    Assert.True(learningObjects.Count > 0);
}
```