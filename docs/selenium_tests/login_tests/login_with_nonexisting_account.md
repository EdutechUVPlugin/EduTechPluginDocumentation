---
id: login_with_nonexisting_account
title: CP-02. Log In with unregistered credentials
---

Test Case Description:

| ID               | CP-02                                                                                                                                                                           |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name             | Log In with unregistered credentials                                                                                                                                            |
| Preconditions    | <ul><li>The user must not have an active repository session.</li></ul>                                                                                                          |
| Data entries     | <ul><li>E-mail: nonexisting@ups.edu.ec</li><li>Password: 12345</li></ul>                                                                                                        |
| Entries          | <ol><li>The plugin shows the log in form.</li><li>The user enters an email and password that does not belong to a registered account and clicks on the Log In button.</li></ol> |
| Expected outputs | A message is shown indicating "The information in one or more fields is incorrect. Please verify the information."                                                              |

Selenium Script:
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