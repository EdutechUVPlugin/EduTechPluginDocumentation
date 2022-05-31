module.exports = {
  mainSideBar: [
    {
      type: "doc",
      id: "intro",
    },
    {
      type: "doc",
      id: "login",
    },
    {
      type: "doc",
      id: "error_handling",
    },
    {
      type: "category",
      label: "Loading Learning Objects",
      items: ["obj/nofilter", "obj/search-criteria", "obj/filterkey"],
    },
    {
      type: "category",
      label: "Selenium Tests",
      items: [
        "selenium_tests/requirements",
        "selenium_tests/login_tests/login_setup",
        "selenium_tests/login_tests/login_with_existing_account",
        "selenium_tests/login_tests/login_with_nonexisting_account",
        "selenium_tests/login_tests/login_with_failure_on_connection",
        "selenium_tests/load_learning_object_tests/load_learning_object_setup",
        "selenium_tests/load_learning_object_tests/filter_learning_objects_list",
        "selenium_tests/load_learning_object_tests/load_more_learning_objects",
        "selenium_tests/load_learning_object_tests/select_learning_object_and_verify_info",
        "selenium_tests/load_learning_object_tests/verify_loaded_learning_object",
      ],
    },
    {
      type: "category",
      label: "Issue Handling",
      items: [
        "issues/issue_overview",
        "issues/err-frankenstyle",
        "issues/err-missing_comment",
        "issues/err-credentials",
        "issues/err-account_registration",
        "issues/err-file_too_big",
        "issues/err-show_package_list_exception",
        "issues/err-file_upload",
        //"issues/err-bad_package_structure",
        //"issues/err-missing_xml_in_scorm_package",
      ],
    },
  ],
};
