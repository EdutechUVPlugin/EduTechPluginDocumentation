---
id: login_with_failure_on_connection
title: CP-03. Iniciar sesión con fallo en la conexión
---

Descripción del caso de prueba:

| ID                     | CP-03                                                                                                                                                                        |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nombre                 | Iniciar sesión con fallo en la conexión                                                                                                                                      |
| Condiciones de entrada | <ul><li>El usuario no debe tener una sesión del repositorio activa.</li></ul>                                                                                                |
| Entradas de datos      | <ul><li>Correo electrónico: teacher@ups.edu.ec</li><li>Contraseña: USER12345</li></ul>                                                                                       |
| Entradas               | <ol><li>El plugin muestra el formulario para iniciar sesión.</li><li>El usuario ingresa un correo electrónico y una contraseña y pulsa el botón Iniciar sesión.</li></ol>    |
| Salidas esperadas      | Se muestra un mensaje indicando "Ocurrió un fallo al intentar conectarse a EduTech. Intente de nuevo más tarde."                                                             |

Script de Selenium:
```cs
[Test]
public void CP03_LogIn_With_Failure_On_Connecting() {
    new WebDriverWait(driver, new TimeSpan(0, 0, 10)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(By.Id("edutech_email"))
    ).Click();
    driver.FindElement(By.Id("edutech_email")).SendKeys(EduTechEmail);
    driver.FindElement(By.Id("edutech_password")).SendKeys(EduTechPassword);
    driver.FindElement(By.ClassName("fp-login-submit")).Click();
    WaitForLoadingToAppear();
    WaitForLoading();
    Assert.True(new WebDriverWait(driver, new TimeSpan(0, 0, 10)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.ClassName("moodle-exception-message"))
    ).Displayed);
}
```