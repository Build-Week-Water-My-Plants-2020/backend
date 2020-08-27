# backend

To run the server locally:

1. Fork repo
2. Clone repo
3. In terminal cd to repo
4. In terminal do a npm i
5. In terminal do a npm run server

To add or make changes to repo:

1. Add me as a collaborator and reviewer. Github handle is desicurry
2. Create a branch with git checkout -b <branch-name>
3. Commit and Push changes to branch
4. Submit pull request. (DO NOT merge your own pull request)
5. Once pull request is reviewed it will be merged
6. After merge you can the do a git pull origin master in terminal 


Water My Plants API

https://watermyplants2020.herokuapp.com/

API Endpoints

|--------------------------------------------------------------------------------------------------|
| Type	 |   Endpoints	              |    Description
---------|----------------------------|------------------------------------------------------------|
| POST	 |   /api/auth/register	      |    create new user with username, phone number and password
---------|----------------------------|------------------------------------------------------------|
| POST	 |   /api/auth/login	      |    login valid user with username and password
---------|----------------------------|------------------------------------------------------------|
| POST	 |   /api/auth/myplants	      |    user can add a new plant
---------|----------------------------|------------------------------------------------------------|
| GET	 |   /api/users	              |    view list of all users
---------|----------------------------|------------------------------------------------------------|
| GET	 |   /api/users/:id	          |    find users by user ID
---------|----------------------------|------------------------------------------------------------|
| GET	 |   /api/plants	          |    view list of all plants
---------|----------------------------|------------------------------------------------------------|
| GET	 |   /api/plants/:id	      |    find plant by plant ID
---------|----------------------------|------------------------------------------------------------|
| GET	 |   /api/users/:id/plants	  |    get plants by user ID
---------|----------------------------|------------------------------------------------------------|
| DELETE |   /api/users/:id	          |    delete a user by ID
---------|----------------------------|------------------------------------------------------------|
| DELETE |   /api/plants/:id	      |    delete a plant by ID
---------|----------------------------|------------------------------------------------------------|
| PUT	 |   /api/users/:id	          |    password & phoneNumber by ID
---------|----------------------------|------------------------------------------------------------|
| PUT	 |   /api/plants/:id	      |    update plant informtion by ID
---------------------------------------------------------------------------------------------------|

Postman Documentation Link:

https://documenter.getpostman.com/view/11310730/T1LVA4HY


User Table:
|--------------------------------------------------|
| id (Primary Key)  | interger          | Not Null |
|                   |                   |          |
| username          | varchar (255)     | Not Null |
|                   |                   |          |
| password          | varchar (255)     |          |
|                   |                   |          |
| phoneNumber       | varchar (255)     |          |
|

Plants table:
|--------------------------------------------------|
| id (Primary Key)      | interger      | Not Null | 
|                       |               |          |
| nickname              | varchar (255) | Not Null |
|                       |               |          |
| species               | varchar (255) |          |
|                       |               |          |
| h2oFrenquency         | varchar (255) |          |
|                       |               |          |
| image                 | varchar (255) |          |
|                       |               |          |
| dateLastWatered       | varchar (255) |          |
|                       |               |          |
| notificationTime      | varchar (255) |          |
|                       |               |          |
| notificationEnabled   | boolean       |          |
|                       |               |          |
| userid (Foreign Key)  | interger      |          |

