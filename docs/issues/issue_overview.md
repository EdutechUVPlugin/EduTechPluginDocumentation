---
id: issue_overview
title: Overview of issues fixed
---

The following table details issues identified during the coding for the plugin. A brief explanation of the actions taken to obtain a solution is included for each issue. 

Table of fixed issues:

| ID    | Name   | Description  | Phase Injected | Phase Detected | Solution   |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Er-1  | Coding style problems | There was a lack of adherence to the Frankenstyle coding style with regards to variable nomenclature.  | Deployment | Deployment | Frankenstyle violations such as proper indentation and variable nomenclature were fixed. Most errors were style violations due to not declaring variables in lower case.                                                                                                       |
| Er-2  | Lack of variable documentation | There was a lack of comments to explain variables before their use.  | Design | Deployment | Comments were added to describe the variables before they are declared and explain their use.                                                                                                    |
| Er-3  | Failure to register accounts | The Moodle plugin review team indicated that they could not register accounts at the EduTech Repository site to access the features of the Moodle plugin.  | Design | Maintenance | The EduTech API development team allowed the registration of accounts open to the public.  |
| Er-4  | Public account registration is not allowed. | Accounts in the EduTech Repository site were restricted to only institutional emails. However, the Moodle plugin review team indicated that account registration must be open to the public to approve the publication of the plugin.  | Deployment | Maintenance |The API development team eliminated the email restrictions for account creation. Now, teacher accounts can be created with the use of an email linked to an educational organization. Also, public accounts with any email domain can be registered pending a review by the EduTech team.                                                                                     |
| Er-5  | Failure to upload content larger than 100 MB | Learning objects greater than 100 MB would fail to load due to a file size exception.  | Requirements | Implementation | The internal Moodle variable limit for file uploads in Moodle was increased to 200 MB.                                                                                                   |
| Er-6  | Failure to load list of learning objects in sites running PHP 8 |In Moodle with PHP 8 an exception is thrown indicating that the list of learning objects is void. This problem does not occur in PHP 7.  | Deployment | Maintenance | Methods for querying learning objects were updated to be compatible with the variable declaration in PHP 8.                                                     |
| Er-7  | Failure to upload content in PHP 8 | An exception thrown from the Moodle file ``scormlib.php`` external to the plugin indicates that variables used to upload files are always void. This is due to difference in variable declaration between PHP 7.4 and 8.  | Deployment | Maintenance | Variable declaration in the ``get_file`` function in the class ``lib.php`` was updated to be compatible with PHP 8.                                                                                        |
