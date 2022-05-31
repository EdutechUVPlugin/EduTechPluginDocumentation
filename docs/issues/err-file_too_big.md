---
id: err-file_too_big
title: Learning objects bigger than 100 MB would not load
---
ER-5: Failure to upload content larger than 100 MB 

### Description
During Implementation, it was discovered that learning objects from the plugin larger than 100 MB could not be uploaded to Moodle courses. This problem manifested after attempting to load from the EduTech repository a 120 MB learning object. During Requirements Elicitation, the possibility of large file sizes for SCORM packages was not taken into consideration. By default, Moodle places a limit on file uploads at 20 MB. 

### Solution
It is possible to increase the upload file limit above 20 MB. Within the Moodle configuration file ``php.ini`` a few variables related to file size were edited. The variable ``upload_max_filesize`` was increased to ``200M``. Moreover, the timeout limit was increased to allow for the longer time it takes to upload large files. The variable ``max_execution_time`` was increased to ``120`` to allow for 120 seconds  to upload a file instead of the default 70 seconds. It is important to note, that these configurations are preferences that are subject to change with every Moodle instance depending on the requirements for different Moodle users. 

The following block of code details the section of the php.ini configuration file. Here, Moodle settings, such as file size limits can be edited.

```bash
;;;;;;;;;;;;;;;;;;;
; Resource Limits ;
;;;;;;;;;;;;;;;;;;;

; Maximum execution time of each script, in seconds
max_execution_time=120
max_input_time=120
; How many GET/POST/COOKIE input variables may be accepted
max_input_vars=5000

; Maximum amount of memory a script may consume
memory_limit=512M

;;;;;;;;;;;;;;;;
; File Uploads ;
;;;;;;;;;;;;;;;;

; Maximum allowed size for uploaded files.
; http://php.net/upload-max-filesize
upload_max_filesize=200M
```