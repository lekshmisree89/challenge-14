## Kanban Board Application



# Description
The Kanban Board Application is a task management tool designed for agile teams, featuring a secure login system 
powered by JSON Web Tokens (JWT). This application enables users to manage tasks across multiple stages, such as "To Do," "In Progress," and "Done," 
while ensuring secure access through authentication. 
Users must log in to manage their tasks, and the app uses JWTs for session management and authorization.

## Table of Contents
features 
Installation
Usage
Technologies
Deployments
Links


# Features
1.User Authentication: Secure login with JWT, stored in localStorage for session management.
2.Task Management: Users can create, edit, and delete tasks.
3.Persistent Session: JWT is used for all API requests and stored in local storage for subsequent requests.
4..Session Timeout: Session automatically expires after a period of inactivity.
5.Logout: Users can log out, and the JWT is removed from local storage.

The application includes the following key pages:

Login Page: Displays a form where users can input their credentials.
Main Kanban Board: Displays tasks sorted into columns ("To Do," "In Progress," "Done").

# Installation 

To get the application running locally:-
Clone the repository:
Navigate to the project directory
Install dependencies for both client and server:
Create a .env file in the server folder and include
Run the application (npm run start:dev)
Open http://localhost:3000 to view the app.


## Usage
Login: Enter your credentials on the login page.
Task Management: Create, update, delete, and move tasks across columns.
Logout: Click "Logout" to clear the JWT and return to the login page.
Session Timeout: Stay inactive for the session to expire, which will automatically log you out.


# Technologies
Frontend: React, TypeScript
Backend: Node.js, Express.js
Authentication: JSON Web Tokens (JWT)
Database: PostgreSQL ,sequelize
Deployment: Render

 ## Deployment
The app is deployed to Render. 
Create a GitHub repository for your server and client.
Deploy the server:
Create a new Web Service in Render for your server, setting up the necessary environment variables (database credentials and JWT secret).
Deploy the client:
Create a Static Site in Render for your frontend and configure environment variables as needed.

# Links
Please find the deployed application link:https://challenge-14-latest.onrender.com/

The git repo link:https://github.com/lekshmisree89/challenge-14














