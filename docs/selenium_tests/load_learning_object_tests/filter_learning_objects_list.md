---
id: filter_learning_objects_list
title: CP-04. Filter list of learning objects
---

Test Case Description:

| ID               | CP-04                                                                                                                                                               |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name             | Filter list of learning objects                                                                                                                                     |
| Preconditions    | <ul><li>The user must have an active repository session.</li></ul>                                                                                                  |
| Data entries     | None                                                                                                                                                                |
| Entries          | <ol><li>The teacher selects a filter and clicks on Filter button.</li><li>The plugin sends the request to API REST and gets the new learning objects list.</li></ol>|
| Expected outputs | A list of filtered learning objects is shown.                                                                                                                       |

Selenium Script:
```cs
[Test]
public void CP04_Filter_Learning_Objects_List() {
    var element = driver.FindElement(By.Id("menuselect_license_filter"));
    SelectElement select = new SelectElement(element);
    select.SelectByIndex(4);
    driver.FindElement(By.ClassName("filter_btn")).Click();
    WaitForLoadingToAppear();
    WaitForLoading();
    var learningObjects = driver.FindElement(By.ClassName("fp-iconview")).FindElements(By.ClassName("fp-file"));
    Assert.True(learningObjects.Count > 0);
}
```