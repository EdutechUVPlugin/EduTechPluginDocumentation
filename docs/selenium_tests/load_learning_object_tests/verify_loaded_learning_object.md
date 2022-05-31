---
id: verify_loaded_learning_object
title: CP-07. Load a selected learning object
---

Test Case Description:

| ID               | CP-07                                                                                                                                                        |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------     |
| Name             | Load a selected learning object                                                                                                                              |
| Preconditions    | <ul><li>The user must have an active repository session.</li><li>There must be at least one learning object in the list.</li></ul>                           |
| Data entries     | None                                                                                                                                                         |
| Entries          | <ol><li>The teacher clicks on a learning object.</li><li>The plugin shows a modal window.</li><li>The teacher clicks on "Select this file" button.</li></ol> |
| Expected outputs | The selected learning object is shown in the file picker.                                                                                                    |

Selenium Script:
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