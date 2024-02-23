Book Store MERN Project - CRUD Perform
This project is a simple implementation of a Book Store using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. This project demonstrates how to perform CRUD (Create, Read, Update, Delete) operations on a book collection.

Prerequisites
Before running the project, make sure you have the following installed:

Node.js
MongoDB
MongoDB Atlas account
Getting Started
Clone the repository:
Copy code
git clone https://github.com/yadavikas004/book-store-mern.git
Install the dependencies for the backend:
Copy code
cd book-store-mern/server
npm install
Create a config.js file in the backend directory and add the following:
Copy code
MONGODB_URI=<your-mongodb-atlas-connection-string>
PORT=5555
Replace mongodb+srv://root:root@books-store-mern.rosm851.mongodb.net/?retryWrites=true&w=majority&appName=Books-Store-MERN with your actual MongoDB Atlas connection string.

Install the dependencies for the frontend:
Copy code
cd ../client
npm install
Start the backend server:
Copy code
cd ../server
npm run app
Start the frontend development server:
Copy code
cd ../client
npm run dev
Open your browser and navigate to http://localhost:5555.
Project Structure
The project consists of two main parts: the backend and the frontend.

Backend
server: The main directory for the backend.
server/config: Contains the configuration for the database connection.
server/models: Contains the schema for the book collection.
server/routes: Contains the routes for the CRUD operations.
server/app.js: The entry point for the backend.
Frontend
client: The main directory for the frontend.
client/src: Contains the source code for the frontend.
client/src/components: Contains the React components for the frontend.
client/src/App.jsx: The entry point for the frontend.
CRUD Operations
Create
To create a new book, navigate to http://localhost:5555/books/create and fill in the required fields.

Read
To view all books, navigate to http://localhost:5555/books. To view a single book, navigate to http://localhost:5555/books/:id, where :id is the ID of the book.

Update
To update a book, navigate to http://localhost:5555/books/:id, where :id is the ID of the book. Fill in the required fields and click "Update Book".

Delete
To delete a book, navigate to http://localhost:5555/books/:id, where :id is the ID of the book. Click "Delete Book" to confirm the deletion.

Testing
To test the CRUD operations, you can use tools like Postman or curl to send HTTP requests to the backend.

Built With
Node.js - JavaScript runtime.
Express.js - Web framework for Node.js.
React.js - JavaScript library for building user interfaces.
MongoDB - Document-oriented database.

Vikas Yadav
yadavikas088@gmail.com

Acknowledgments

MERN Stack Guide
MERN Stack Tutorial
MERN Stack CRUD Example
MERN Stack CRUD Tutorial
MERN Stack Blog
MERN Stack CRUD Operations
MERN Stack CRUD Example with Mongoose
MERN Stack CRUD Operations with Mongoose
MERN Stack CRUD Tutorial with Mongoose
MERN Stack Blog with Mongoose
MERN Stack CRUD Operations with Mongoose and GraphQL
MERN Stack CRUD Example with Mongoose and GraphQL
MERN Stack CRUD Tutorial with Mongoose and GraphQL
MERN Stack Blog with Mongoose and GraphQL
MERN Stack CRUD Operations with Mongoose and REST API
MERN Stack CRUD Example with Mongoose and REST API
[MERN Stack CRUD Tutorial with Mongoose and REST API](https://www.mongodb.com/
