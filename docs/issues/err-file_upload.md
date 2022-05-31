---
id: err-file_upload
title: Failure to load content to courses in PHP 8 
---
ER-7: Failure to upload content in PHP 8 from a SCORM package

### Description
An exception was thrown in the Moodle file ``scormlib.php`` due to the failure to declare variables in the plugin scripts. At first, this was understood to be a limitation of the then under development Moodle for PHP 8. At the time, there was no stable release of Moodle for PHP 8. As a result, the stabiity of the EduTech Repository plugin  could not be guaranteed.

Even so, the plugin was debugged in PHP 8 to create a stable version of the plugin compatible in both PHP 7.4 were there is a stable release of Moodle and PHP 8.


Figure:  Exception thrown due to incorrect variable declaration in the function ``count()`` in the Moodle file ``scormlib.php`` in Moodle with PHP8.
![Exception thrown in PHP 8 when loading a SCORM package to a Moodle course in PHP 8.](/img/issues/errors/er-6-upload.png)

The follwing excerpt from the error log details the error when it was replicated in a local environment with PHP 8.

```bash
[Fri Jan 28 17:48:46.667239 2022] [php:notice] [pid 7864:tid 1876] [client ::1:64803] Default exception handler: Exception - count(): Argument 1 ($value) must be of type Countable|array, null given Debug: \r\nError code: generalexceptionmessage\n* line 571 of \\mod\\scorm\\datamodels\\scormlib.php: TypeError thrown\n* line 300 of \\mod\\scorm\\locallib.php: call to scorm_parse_scorm()\n* line 171 of \\mod\\scorm\\lib.php: call to scorm_parse()\n* line 128 of \\course\\modlib.php: call to scorm_add_instance()\n* line 168 of \\course\\modedit.php: call to add_moduleinfo()\n, referer: http://localhost/moodle/course/modedit.php?add=scorm&type=&course=1&section=1&return=0&sr=0
```

### Solution
Changes were made to the ``get_file`` function in the plugin class ``lib.php``. The changes made were similar to the updates in Er-6 Failure to load list of learning objects in sites running PHP 8. Variable declaration was changed so that no variables were null.

After the variable declaration updates, learning objects would load correctly in both PHP 7.4 and PHP 8.