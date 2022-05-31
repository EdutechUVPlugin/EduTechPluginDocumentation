---
id: login_with_nonexisting_account
title: CP-02. Iniciar sesión con cuenta inexistente
---

Descripción del caso de prueba:

| ID                     | CP-02                                                                                                                                                                        |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nombre                 | Iniciar sesión con cuenta inexistente                                                                                                                                        |
| Condiciones de entrada | <ul><li>El usuario no debe tener una sesión del repositorio activa.</li></ul>                                                                                                |
| Entradas de datos      | <ul><li>Correo electrónico: nonexisting@ups.edu.ec</li><li>Contraseña: 12345</li></ul>                                                                                       |
| Entradas               | <ol><li>El usuario ingresa un correo electrónico y una contraseña incorrecta y pulsa el botón Iniciar sesión</li></ol>                                                       |
| Salidas esperadas      | Se muestra un mensaje indicando "La información en uno o varios campos es incorrecta. Por favor verifica la información."                                                    |

Script de Selenium:
```cs
[Test]
public void CP02_LogIn_With_NonExisting_Account() {
    new WebDriverWait(driver, new TimeSpan(0, 0, 15)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(By.Id("edutech_email"))
    ).Click();
    driver.FindElement(By.Id("edutech_email")).SendKeys("nonexisting@example.com");
    driver.FindElement(By.Id("edutech_password")).SendKeys("123123123");
    driver.FindElement(By.ClassName("fp-login-submit")).Click();
    WaitForLoading();
    Assert.True(new WebDriverWait(driver, new TimeSpan(0, 0, 10)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.ClassName("moodle-exception-message"))
    ).Displayed);
}
```