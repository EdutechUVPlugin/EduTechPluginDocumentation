---
id: err-account_registration
title: Failure to register public account
---
ER-4: Public account registration is not allowed.

### Description
Another issue with account registration at the EduTech Repository website involved the restrictions for account emails. According to the Moodle review team, it is necessary that public domain emails are valid to create an account. At first, only emails under specific domains such as  @ups.edu.ec, were valid. As any memeber of the Moodle community should be able to access the EduTech Repository plugin functionality, restrictions for EduTech account creation should be removed. The full message received from the Moodle review team can be seen in the following figure.

Figure:  Message received from the Moodle review team.
![Email sent by a member of the Moodle review team explaining the need to have account registration open to the public.](/img/issues/errors/er-4-account.png)

### Solution
A message was sent to the Moodle review team indicating that the problem would be handled. Steps were taken to remove domain restrictions for emails during the EduTech account registration process.
Currently, the EduTech API development team has removed email restrictions for public accounts. Public Account registration was tested using emails with the domain @gmail.com and @outlook.com. After an account is registered, there is a wait time to activate the account for it to be approved by the EduTech team. Additionally, there are teacher accounts that can be registered with email domains associated with universities. For example,  @uv.mx. Teacher accounts are activated immediately and are not subject to wait times for approval.
