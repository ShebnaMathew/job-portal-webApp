# Job portal

Home screen
When the app is run, users should be prompted to log in. Create two mock user accounts into your application:
- username: ​newuser​; password: ​newuser
- username: ​expert​; password: ​expert
You do not need to worry about allowing users to create accounts.

Job search app functionality
The app will enable users to do the following things:
- Search for job openings based on particular programming languages.
- Users should indicate their language choices from preset choices e.g. buttons or a dropdown menu.
- Users should be able to select multiple languages at one time (e.g. Python and Java).
- As this is a prototype, you only need to support 6 language options. For example, it would be acceptable to let users choose from the following list: Python, Java, Javascript, C#, C, MySQL.
- You can choose whether to require users to select at least one language. Just make sure your UI clearly indicates what is expected.
- Save and view their saved job postings.
- As this is a prototype, you are not expected to actually save postings: your UI
should allow a tester to go through the process of saving a posting but it is not expected that a newly saved posting is associated with the mock account next time they log in.
- Make sure there is a way for the users to view the jobs they have saved. You should associate one or two saved jobs with the expert user’s hard-coded account data. The new user should not have any saved jobs associated with their account.
- Browse all jobs by popularity i.e. the number of times the posting has been saved.

Support for novice users
When a tester logs on as ​newuser​, they should be taken through an onboarding process to learn how to use the app. The general requirements are as follows:
- Display upfront an overview of each of the main features of the app: search by programming language, save postings, and browse by popularity.
- The user should be encouraged to review the onboarding materials but they should be able to skip/opt out of reading the materials.
- If the user does opt out, they should be able to view them again at another time.

Support for expert users
When a tester logs on as ​expert​, they should be taken straight into the main app content and they should quickly be able to get to the content they are most interested in.
However, as even expert users need support sometimes, they should still be able to access the onboarding help if they want to.
