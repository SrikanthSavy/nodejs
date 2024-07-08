/*

    Lets start using express.js 
    - Express.js is a backedn web application framework, used to build RESTful API's with node.js
    - Layered Approach - having different files, each file has its own usecase. 

my-node-app/
│
├── controllers/
│   ├── userController.js
│   └── authController.js
│
├── services/
│   ├── userService.js
│   └── authService.js
│
├── models/
│   ├── userModel.js
│   └── postModel.js
│
├── routes/
│   ├── userRoutes.js
│   └── authRoutes.js
│
├── config/
│   └── database.js
│
├── middlewares/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── views/
│   └── index.js
│
├── public/
│   ├── css/
│   └── js/
│
├── app.js
├── package.json
└── README.md


1. Controllers - Entry point for services. All the HTTP request and response will be handled by this controllers. 

2. Services - Contains the business logic of the application. 

3. Models - This folder contains the files that defines the data structure and interation with the data structure. 

4. Routes - 
FrontEnd - indicate some pages. 
BackEnd - indicates API's 

5. Config - Contains configuration files. 

6. Middlewares - Suppose we need to create a private API's Authentication and authorization. 
Authentication - Credientials. 
Authorization - Token 

7. Views - Templates for serverside rendering. 

8. Public - Static files served by the application. 

9. app.js - Entry point file for the application. 
index.js/server.js/app.js 

10. package.json - Contains all the dependancy packages used in the application. 

11. Readme.md - Consists of the instructions and documentation for the project. 


> Uniform Interfaces : 

     http://localhost:7799/api/users 
     http://localhost:7799/api/users/userId

     http://localhost:7799/api/products/
     http://localhost:7799/api/products/mobiles
     http://localhost:7799/api/products/mobiles/iphones
     http://localhost:7799/api/products/mobiles/iphones/pid

> Catchability : Redis - Its an open source, in-memory(cache) key-value database. Once we store the data
in the actual databse then we clear the data in redis. 

> Stateless : HTTP is stateless. It won't rememnber any info of request and response. 


When ever we want to build RESTful API's. We have to follow
1. It should have layered approach
2. It should have clent-server architecture. 
3. It should have uniform interface
4. It should be stateless. 


Step1: npm init - Used to create package.json 
package.json is used to store the info of what all the packages that are maintained by the 
application.
Give the corresponding details like:
- package name:
- version:
- description:
- entry point:
- test command:
- git repo:
- keywords:
- author:
- licence


Step2: npm install express

It creates node_moduels - which consists of all the dependancy packages for our project.
It creates package-lock.json - consists of all the dependancy packages that are required
by current application. 

 */

