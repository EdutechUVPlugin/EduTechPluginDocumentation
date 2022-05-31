---
id: load_more_learning_objects
title: CP-05. Load more learning objects
---

Test Case Description:

| ID               | CP-05                                                                                                                                                                            |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name             | Load more learning objects                                                                                                                                                       |
| Preconditions    | <ul><li>The user must have an active repository session.</li><li>There must be at least one more page to load.</li></ul>                                                         |
| Data entries     | None                                                                                                                                                                             |
| Entries          | <ol><li>The teacher scrolls to the bottom of the list.</li><li>The plugin sends the request to API REST and gets the new learning objects list accord to the next page.</li></ol>|
| Expected outputs | The new learning objects from the next page are appended to the current list.                                                                                                    |

Selenium Script:
```cs
[Test]
public void CP05_Load_More_Learning_Objects() {
    var element = driver.FindElement(By.Id("menuselect_license_filter"));
    SelectElement select = new SelectElement(element);
    select.SelectByIndex(4);
    driver.FindElement(By.ClassName("filter_btn")).Click();
    WaitForLoadingToAppear();
    WaitForLoading();
    var learningObjects = driver.FindElement(By.ClassName("fp-iconview")).FindElements(By.ClassName("fp-file"));
    js.ExecuteScript(
        "document.getElementsByClassName('fp-iconview')[0].scrollTop = document.getElementsByClassName('fp-iconview')[0].scrollHeight;"
    );
    var newLearningObjects = driver.FindElement(By.ClassName("fp-iconview")).FindElements(By.ClassName("fp-file"));
    Assert.True(learningObjects.Count <= newLearningObjects.Count);
}
```