---
id: login_setup
title: Log In Tests - Set Up
---

The following script belongs to each of the log in tests. It is composed of a SetUp method, which is executed before the test method; a TearDown method, which is executed after the test method; a WaitForLoading method, which helps to wait until loading icon container is gone; and a WaitForLoadingToAppear, which helps to wait until loading icon container shows up.
The properties set at the beginning are useful for easier modification of access credentials.

```cs
private IWebDriver driver;
public IDictionary<string, object> vars { get; private set; }
private IJavaScriptExecutor js;
private static string MoodleUsername = "";
private static string MoodlePassword = "";
private static string EduTechEmail = "suryabug@example.com";
private static string EduTechPassword = "123123123";

private void WaitForLoading() {
    new WebDriverWait(driver, new TimeSpan(0, 0, 10)).Until(
        SeleniumExtras.WaitHelpers.ExpectedConditions.InvisibilityOfElementLocated(By.CssSelector(".icon.fa.fa-circle-o-notch.fa-spin.fa-fw"))
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
        SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(By.CssSelector("a[title='Añadir un(a) nuevo/a Paquete SCORM']"))
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