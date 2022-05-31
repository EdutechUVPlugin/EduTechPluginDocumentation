---
id: err-frankenstyle
title: Coding style problems
---

ER-1: The Plugin code did not adhere to the Frankenstyle standard used for Moodle.

### Description
After the first review by the Moodle team, a few errors were pointed out indicating a Frankenstyle syntax violations. Frankenstyle is the coding style used in Moodle and as such, Moodle plugins must follow its syntax in order to be published.

The files that violated Frankenstyle rules include:
- edutech.php
- requester.php
- access.php
- repository_edutech.php
- lib.php
- edutech_test.php
- version.php

### Solution
The errors corresponded to Frankenstyle rules that were not met. Most of the errors regarded the failure to declare variables using lower case letters. The list of reported Frankenstyle violations can be seen in the following Figure.

Figure:  Franenstyle syntax violations
![List of Frankenstyle errors](/img/issues/errors/er-1-frankenstyle.png)

Besides incorrect varaible declaration, other errors included leaving additional blank spaces between lines of code.Empty lines of code were removed between methods and after declaring parameters for functions.
