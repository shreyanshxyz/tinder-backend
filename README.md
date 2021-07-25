# PhotoSpace - ReactJS, NodeJS, ExpressJS, MongoDB, Base64


## Description:

This project was made in as a way to practice my Full Stack skills.
I also used it to learn how to implement an authentication system into my
back-end, which in this case I used JWT. The user can also login
with their google account, and all info related to the user is
saved in a MongoDB database. If the user wants to upload a
image, the image (and other details) are inserted to the database
and uploaded to the database as an image storage.

### Features Include:
- Authentication with Google OAUTH
- Authentication with JWT
- Upload an image together with:
  - A title
  - Editing Features
  - Like Ability
- Delete their own posts

## Time Taken:

10 Days

## Technologies Used:

- JavaScript
- ReactJS
- NodeJS
- ExpressJS
- MongoDB
- JWT
- Google OAUTH
- Base64

### Front End:

The front-end is hosted on Netlify. The back-end repository is: https://github.com/shreyanshxyz/PhotoSpace-Frontend

### Back End

This repository is for the back-end. The back-end is hosted on a Heroku Dyno. 


## Design:

### Database:

- Users: Stores user first and last name, email, and googleId
- Pins: Stores all pins uploaded to the platform. Information for each pin include the cloudinary image id, googleId of the user that uploaded, a title, a description, and an optional url.
- SavedPins: Stores all pins that were saved by a user. Each saved pin stores the cloudinar image id and the googleId of the user saving the pin.


<!-- ### Server-Side:
Apollo Server: 
- Express server with a graphql enpoint:
  - Mutations and queries are sent to the front end and handled with Apollo-Client.
  - Sequelize ORM is used for database requests -->
  
### Front-End:

Front End fully developed in ReactJS using the create-react-app boiler plate
