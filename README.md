# Insurance API

Hi! This is an API where it's possible to list users and policies from data in `data` folder.

It has authentication and authorization - `admin` role is needed to filter users by policy and list policies.

The API is deployed on Heroku [here](https://insurance-api-test.herokuapp.com/).

## API endpoints

* `POST /login`
* `GET /users?id={id}&name={name}&policy={policy}`
* `GET /policies?username={username}`

## How to

1) To login, make a `POST` to `https://insurance-api-test.herokuapp.com/login` with the following body: `{ "email": "britneyblankenship@quotezart.com" }`
2) Get the `token` and use it in the subsequent requests: header `Authorization: Bearer {token}`
3) To get a user by id, make a `GET` to `https://insurance-api-test.herokuapp.com/users?id=a0ece5db-cd14-4f21-812f-966633e7be86`
4) To get a user by name, make a `GET` to `https://insurance-api-test.herokuapp.com/users?name=Britney`
5) To get the list of policies linked to a user name, make a `GET` to `https://insurance-api-test.herokuapp.com/policies?username=Britney`. Only allowed for `admin` users.
6) To get the user linked to a policy number, make a `GET` to `https://insurance-api-test.herokuapp.com/users?policy=64cceef9-3a01-49ae-a23b-3761b604800b`. Only allowed for `admin` users.

## Notes

* This project uses Node 11.7 with native ES Modules
* Routes are defined in Express and authentication is handled by `jsonwebtoken`
* [Folders are organized around features instead of roles](https://github.com/elsewhencode/project-guidelines#structure-and-naming)
* App automatically deployed to Heroku on each push to master

## Running the application locally

* `npm install` and `npm start` will run the application with nodemon for live reloads
* `npm test` runs tests
