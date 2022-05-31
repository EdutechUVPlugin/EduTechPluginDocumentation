---
id: login_with_existing_account
title: CP-01. Iniciar sesión con cuenta existente.
---

Descripción del caso de prueba:

| ID                     | CP-01                                                                                                                                                                                              |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nombre                 | Iniciar sesión con cuenta existente.                                                                                                                                                               |
| Condiciones de entrada | <ul><li>El usuario no debe tener una sesión del repositorio activa.</li><li>El usuario debe tener una cuenta registrada en el repositorio de objetos de aprendizaje del proyecto EduTech.</li></ul>|
| Entradas de datos      | <ul><li>Correo electrónico: teacher@ups.edu.ec</li><li>Contraseña: USER12345</li></ul>                                                                                                             |
| Entradas               | <ol><li>El plugin muestra el formulario para iniciar sesión.</li><li>El usuario ingresa su correo electrónico y contraseña y pulsa el botón Iniciar sesión.</li></ol>                              |
| Salidas esperadas      | Se muestra la lista de objetos de aprendizaje y los campos de filtro.                                                                                                                              |

Script de Selenium:
```cs
[Test]
public void CP01_LogIn_With_Existing_Account() {
    new WebDriverWait(driver, new TimeSpan(0, 0, 10)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(By.Id("edutech_email"))
    ).Click();
    driver.FindElement(By.Id("edutech_email")).SendKeys(EduTechEmail);
    driver.FindElement(By.Id("edutech_password")).SendKeys(EduTechPassword);
    driver.FindElement(By.ClassName("fp-login-submit")).Click();
    WaitForLoadingToAppear();
    WaitForLoading();
    new WebDriverWait(driver, new TimeSpan(0, 0, 10)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.ClassName("fp-tb-logout"))
    );
}
```