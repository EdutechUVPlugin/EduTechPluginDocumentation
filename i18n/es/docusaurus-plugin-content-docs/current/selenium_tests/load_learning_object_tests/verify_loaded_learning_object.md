---
id: verify_loaded_learning_object
title: CP-07. Verificar objeto de aprendizaje cargado
---

Descripción del caso de prueba:

| ID                     | CP-07                                                                                                                                                                 |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nombre                 | Verificar objeto de aprendizaje cargado                                                                                                                               |
| Condiciones de entrada | <ul><li>El docente debe tener una sesión del repositorio activa.</li><li>Debe haber al menos 1 objeto de aprendizaje en la lista.</li></ul>                           |
| Entradas de datos      | Ninguna                                                                                                                                                               |
| Entradas               | <ol><li>El docente da clic en un objeto de aprendizaje.</li><li>El plugin muestra un modal emergente.</li><li>El docente da clic en Seleccionar este archivo</li></ol>|
| Salidas esperadas      | Se muestra en el seleccionador de archivos el objeto de aprendizaje seleccionado.                                                                                     |

Script de Selenium:
```cs
[Test]
public void CP07_Load_Learning_Object_In_Moodle() {
    var element = driver.FindElement(By.Id("menuselect_license_filter"));
    SelectElement select = new SelectElement(element);
    select.SelectByIndex(4);
    driver.FindElement(By.ClassName("filter_btn")).Click();
    WaitForLoadingToAppear();
    WaitForLoading();
    driver.FindElement(By.ClassName("fp-file")).Click();
    new WebDriverWait(driver, new TimeSpan(0, 0, 10)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(
            By.ClassName("fp-select-confirm")
        )
    );
    driver.FindElement(By.ClassName("fp-select-confirm")).Click();
    new WebDriverWait(driver, new TimeSpan(0, 0, 20)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.InvisibilityOfElementLocated(
            By.XPath("//div[contains(@class,'fp-fileinfo') and contains(@id,'yui')]")
        )
    );
    new WebDriverWait(driver, new TimeSpan(0, 0, 20)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
            By.CssSelector(".fp-file.fp-hascontextmenu")
        )
    );
    Assert.True(driver.FindElement(By.CssSelector(".fp-file.fp-hascontextmenu")).Displayed);
}
```