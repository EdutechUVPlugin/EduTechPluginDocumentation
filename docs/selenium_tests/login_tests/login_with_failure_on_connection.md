---
id: login_with_failure_on_connection
title: CP-03. Connection failure on Log In
---

Test Case Description:

| ID               | CP-03                                                                                                                               |
|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------|
| Name             | Connection failure on Log In                                                                                                        |
| Preconditions    | <ul><li>The user must not have an active repository session.</li></ul>                                                              |
| Data entries     | <ul><li>E-mail: teacher@ups.edu.ec</li><li>Password: USER12345</li></ul>                                                            |
| Entries          | <ol><li>The plugin shows the log in form.</li><li>The user enters an email and a password and clicks on the Log In button.</li></ol>|
| Expected outputs | A message is shown indicating "An error occurred on trying to connect to EduTech. Please try again later."                          |

Selenium Script:
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