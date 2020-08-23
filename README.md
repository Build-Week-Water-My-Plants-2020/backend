# backend

https://watermyplants2020.herokuapp.com/

API Endpoints

Type	Endpoints	Description
POST	/api/auth/register	create new user with username, phone number and password
POST	/api/auth/login	login valid user with username and password
POST	/api/auth/myplants	user can add a new plant
GET	/api/users	view list of all users
GET	/api/users/:id	find users by user ID
GET	/api/plants	view list of all plants
GET	/api/plants/:id	find plant by plant ID
GET	/api/users/:id/plants	get plants by user ID
DELETE	/api/users/:id	delete a user by ID
DELETE	/api/plants/:id	delete a plant by ID
PUT	/api/users/:id	update user first and last name by ID
PUT	/api/plants/:id	update plant informtion by ID

Postman Documentation Link:

https://documenter.getpostman.com/view/11310730/T1LVA4HY