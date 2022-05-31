---
id: login_with_existing_account
title: CP-01. Log In with a registered account
---

Test Case Description:

| ID               | CP-01                                                                                                                                                                      |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name             | Log In with a registered account                                                                                                                                           |
| Preconditions    | <ul><li>The user must not have an active repository session.</li><li>The user must have a registered account in the EduTech project learning objects repository.</li></ul> |
| Data entries     | <ul><li>E-mail: teacher@ups.edu.ec</li><li>Password: USER12345</li></ul>                                                                                                   |
| Entries          | <ol><li>The plugin shows the log in form.</li><li>The user enters his email and password and clicks on the Log In button.</li></ol>                                        |
| Expected outputs | The filter fields are shown along with a list of learning objects.                                                                                                         |

Selenium Script:
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