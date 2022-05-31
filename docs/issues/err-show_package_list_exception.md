---
id: err-show_package_list_exception
title: Failure to query content in PHP 8
---
ER-6: Failure to load list of learning objects in sites running PHP 8

### Description
When running Moodle with PHP 8, after logging into the EduTech plugin and selecting filters to query learning objects, an error message would pop up with the message `error/invalidPage``. This error can be seen in the following figure. This instance of the error occured in Moodle running with PHP 8.0.9 on a remote server provided by the development team at Aguascalientes. The error can be seen in the following figure.

Figure:  Error when querying the list of learning objects. 
![Pop up error message error, invalid page.](/img/issues/errors/er-5-invalid.png)

The following excerpt from the error log, taken after replicating the bug in a local environment, reveals in which functions the error is thrown.

```bash
[Tue Jan 25 20:53:52.542154 2022] [php:notice] [pid 13540:tid 1872] [client ::1:54315] Default exception handler: error/Invalid page. Debug: \r\nError code: Invalid page.\r\n$a contents: \n* line 137 of \\repository\\edutech\\classes\\edutech.php: repository_exception thrown\n* line 210 of \\repository\\edutech\\lib.php: call to repository_edutech\\edutech::get_learning_objects()\n* line 192 of \\repository\\edutech\\lib.php: call to repository_edutech->search_content()\n* line 130 of \\repository\\repository_ajax.php: call to repository_edutech->search()\n, referer: http://localhost/moodle/course/modedit.php?add=scorm&type=&course=1&section=1&return=0&sr=0
```
The error manifests in the function ``get_learning_objects`` within the EduTech Repository plugin file ``lib.php`` . The following figure shows were the error occurs.
Figure: Function ``get_learning_objects``
![Code block in which an exception is thrown](/img/issues/errors/er-5-get_learning_objects.png)

After debugging, it was discovered that the error occurs in the plugin classes ``edutech.php`` and  ``lib.php``due to the differences in variable declaration between PHP 7.4 and PHP  8. Due to these differences, variables for filters and queries are always null and therefore do not hold any data. Therefore, functions such as ``count()``and ``http_build_query()`` nedded to build HTTP requests to the EduTech API would fail with empty parameters. 

### Solution
To adapt the plugin for PHP 8, adjustments were made to the function ``get_learning_objects`` in the class `edutech.php`` and the function ``search_content`` in the ``lib.php`` class. Both these classes are EduTech Repository plugin files.

The followig code block shows the updated version of the function ``get_learning_objects``.

```bash
public static function get_learning_objects($page, $filters = []){
        global $SESSION;
        if (!self::is_authenticated()){
            throw new \repository_exception(get_string("unauthenticated", "repository_edutech"));
        }
        $url = self::$learningobjectsendpoint;
        $filtersquery = http_build_query($filters);
        if (strlen($filtersquery) > 0){
            $filtersquery = "&" . $filtersquery;
            $url = self::$learningobjectssearchendpoint;
        }
        $requester = new requester($url . "?page=$page" . $filtersquery);
        $response = $requester->get([
            "Authorization: " . $SESSION->edutech->access_token,
            "Accept-Language: " . explode("_", current_language())[0]
        ]);
        if ($requester->response_code != 200){
            if (isset($response["detail"])){
                throw new \repository_exception($response["detail"]);
            }
            throw new \repository_exception(get_string("unavailableapi", "repository_edutech"));
        }
        return $response;
    }
```

After fixing these errors, the list of learning objects would query correctly.
