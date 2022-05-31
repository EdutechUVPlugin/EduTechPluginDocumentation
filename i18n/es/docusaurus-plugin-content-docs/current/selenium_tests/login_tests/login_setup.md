---
id: login_setup
title: Pruebas de Inicio de sesión - Set Up
---

El siguiente script pertenece a cada una de las pruebas de Inicio de sesión. Está compuesto de un método SetUp, el cual se ejecuta antes del método de la prueba; un método TearDown, el cual se ejecuta después del método de la prueba; un método WaitForLoading, el cual ayuda a esperar hasta que el contenedor del icono de cargando desaparezca; y un método WaitForLoadingToAppear, el cual ayuda a esperar hasta que el contenedor del icono de cargando aparezca.
Las propiedades establecidas al principio son útiles para una modificación más rápida de las credenciales de acceso.

```cs
private IWebDriver driver;
public IDictionary<string, object> vars { get; private set; }
private IJavaScriptExecutor js;
private static string MoodleUsername = "";
private static string MoodlePassword = "";
private static string EduTechEmail = "suryabug@example.com";
private static string EduTechPassword = "123123123";

private void WaitForLoadingToAppear() {
    new WebDriverWait(driver, new TimeSpan(0, 0, 10)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(
            By.ClassName("fp-content-loading")
        )
    );
}

private void WaitForLoading() {
    new WebDriverWait(driver, new TimeSpan(0, 0, 10)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.InvisibilityOfElementLocated(
            By.ClassName("fp-content-loading")
        )
    );
}

[SetUp]
public void SetUp() {
    driver = new ChromeDriver();
    js = (IJavaScriptExecutor) driver;
    vars = new Dictionary<string, object>();
    driver.Navigate().GoToUrl("http://moodledev.com/login/index.php");
    driver.Manage().Window.Maximize();
    driver.FindElement(By.CssSelector("input[name=username]")).SendKeys(MoodleUsername);
    driver.FindElement(By.CssSelector("input[name=password]")).SendKeys(MoodlePassword);
    driver.FindElement(By.Id("loginbtn")).Click();
    Assert.IsTrue(driver.FindElement(By.ClassName("usermenu")).Displayed);
    driver.FindElement(By.CssSelector("a[data-parent-key=myhome]")).Click();
    driver.FindElement(By.ClassName("coursename")).Click();
    driver.FindElement(By.CssSelector(".singlebutton form button")).Click();
    new WebDriverWait(driver, new TimeSpan(0, 0, 10)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(By.CssSelector("button[data-action=open-chooser]"))
    ).Click();
    new WebDriverWait(driver, new TimeSpan(0, 0, 10)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(By.XPath("//a[contains(@title,'SCORM')]"))
    ).Click();
    new WebDriverWait(driver, new TimeSpan(0, 0, 10)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(By.CssSelector(".fp-btn-add a"))
    ).Click();
    WaitForLoading();
    new WebDriverWait(driver, new TimeSpan(0, 0, 10)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(By.XPath("//span[contains(text(),'EduTech')]"))
    ).Click();
    WaitForLoading();
}

[TearDown]
protected void TearDown() {
    driver.Quit();
}
```
