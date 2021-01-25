This project is a burger builder app based on Udemy course "React - The Complete Guide"  

# Project Outline
## React Router
## Redux
## Authentication
User login -> If succeed, server returns token -> 
Client stores it in local storage -> 
Return the token whenever a request is sent -> 
Server verifies token first before proceeding any request
## Unit Test
- Don't test the library
- Don't test complex connections
- Do test isolated units
- Do test conditional outputs

Tools:
- Test Runner: Jest
    - Executes Tests and Provides validation Library
- Testing Utilities: Enzyme
    - "Simulates" the React App (mounts components, allows you to dig into the DOM)

# How to use
Create a .env file in root folder to store api key.
Add this .env file to .gitignore.
See reference [How to Store API Keys and ENV Vars in a create-react-app Project](http://lortza.github.io/2018/05/22/create-react-app-api-keys.html)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
