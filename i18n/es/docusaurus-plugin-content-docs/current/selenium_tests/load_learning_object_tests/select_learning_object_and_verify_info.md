---
id: select_learning_object_and_verify_info
title: CP-06. Seleccionar objeto de aprendizaje y verificar información
---

Descripción del caso de prueba:

| ID                     | CP-06                                                                                                                                                      |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nombre                 | Seleccionar objeto de aprendizaje y verificar información                                                                                                  |
| Condiciones de entrada | <ul><li>El docente debe tener una sesión del repositorio activa.</li><li>Debe haber al menos 1 objeto de aprendizaje en la lista.</li></ul>                |
| Entradas de datos      | Ninguna                                                                                                                                                    |
| Entradas               | <ol><li>El docente da clic en un objeto de aprendizaje.</li><li>El plugin muestra un modal emergente.</li></ol>                                            |
| Salidas esperadas      | Se muestra el nombre del archivo, el nombre del autor, la licencia, la fecha de creación y la fecha de modificación del objeto de aprendizaje seleccionado.|

Script de Selenium:
```cs
[Test]
public void CP06_Select_Learning_Object_And_Verify_Info() {
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
    Thread.Sleep(2000);
    Assert.True(
        driver.FindElement(
            By.XPath("//div[contains(@class,'fp-datemodified') and contains(@id,'yui')]/span[contains(@class,'fp-value')]")
        ).Text.Length > 0
    );
    Assert.True(
        driver.FindElement(
            By.XPath("//div[contains(@class,'fp-datecreated') and contains(@id,'yui')]/span[contains(@class,'fp-value')]")
        ).Text.Length > 0
    );
    Assert.True(
        driver.FindElement(
            By.XPath("//div[contains(@class,'fp-size') and contains(@id,'yui')]/span[contains(@class,'fp-value')]")
        ).Text.Length > 0
    );
    Assert.True(
        driver.FindElement(
            By.XPath("//div[contains(@class,'fp-license') and contains(@id,'yui')]/span[contains(@class,'fp-value')]")
        ).Text.Length > 0
    );
    Assert.True(
        driver.FindElement(
            By.XPath("//div[contains(@class,'fp-author') and contains(@id,'yui')]/span[contains(@class,'fp-value')]")
        ).Text.Length > 0
    );
}
```