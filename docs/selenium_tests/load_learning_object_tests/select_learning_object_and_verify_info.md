---
id: select_learning_object_and_verify_info
title: CP-06. Select learning object and verify its information
---

Test Case Description:

| ID               | CP-06                                                                                                                                   |
|:-----------------|:----------------------------------------------------------------------------------------------------------------------------------------|
| Name             | Select learning object and verify its information                                                                                       |
| Preconditions    | <ul><li>The user must have an active repository session.</li><li>There must be at least one learning object in the list.</li></ul>      |
| Data entries     | None                                                                                                                                    |
| Entries          | <ol><li>The teacher clicks on a learning object.</li><li>The plugin shows a modal window.</li></ol>                                     |
| Expected outputs | The file name, the author's name, the license, the creation date, and the modification date from the selected learning object are shown.|

Selenium Script:
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