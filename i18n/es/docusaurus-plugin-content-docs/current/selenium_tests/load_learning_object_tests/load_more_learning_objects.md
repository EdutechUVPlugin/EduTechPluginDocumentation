---
id: load_more_learning_objects
title: CP-05. Cargar más objetos de aprendizaje
---

Descripción del caso de prueba:

| ID                     | CP-05                                                                                                                                                                                                         |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nombre                 | Cargar más objetos de aprendizaje                                                                                                                                                                             |
| Condiciones de entrada | <ul><li>El docente debe tener una sesión del repositorio activa.</li><li>Debe haber al menos una página más por cargar.</li></ul>                                                                             |
| Entradas de datos      | Ninguna                                                                                                                                                                                                       |
| Entradas               | <ol><li>El docente se desplaza hasta el final de la lista.</li><li>El plugin envía la petición a la API REST y recibe el nuevo listado de objetos de aprendizaje de acuerdo con la siguiente página.</li></ol>|
| Salidas esperadas      | Se anexan los objetos de aprendizaje de la siguiente página a la lista actual.                                                                                                                                |

Script de Selenium:
```cs
[Test]
public void CP05_Load_More_Learning_Objects() {
    var element = driver.FindElement(By.Id("menuselect_license_filter"));
    SelectElement select = new SelectElement(element);
    select.SelectByIndex(4);
    driver.FindElement(By.ClassName("filter_btn")).Click();
    WaitForLoadingToAppear();
    WaitForLoading();
    var learningObjects = driver.FindElement(By.ClassName("fp-iconview")).FindElements(By.ClassName("fp-file"));
    js.ExecuteScript(
        "document.getElementsByClassName('fp-iconview')[0].scrollTop = document.getElementsByClassName('fp-iconview')[0].scrollHeight;"
    );
    var newLearningObjects = driver.FindElement(By.ClassName("fp-iconview")).FindElements(By.ClassName("fp-file"));
    Assert.True(learningObjects.Count <= newLearningObjects.Count);
}
```