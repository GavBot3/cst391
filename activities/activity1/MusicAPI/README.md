# Activity 1

- Author:  Gavin Kuehn
- Date:  2/11/2025
- Course:  CST-391
## Introduction
This activity is a web server created using `Node.js` to demonstrate how to use REST API functions. It will connected to a MySQL database to manage the data. The web server will receive a GET, POST, PUT, or DELETE request from a browser or postman. Once it receives these request it will display data it was requested or complete an action that was request such as inputting a new item into the database.

---
## Executive Summary

- Activity 1 is an example application that interfaces with a MySQL database.
- It uses a Model View Controller Architecture
	- The model will maintain the data within the database
	- The view is what the user interacts with and sees
	- The controller will facilitate and manage the application
- These are the tools and technologies that are used to build this application
	- [Node JS](https://nodejs.org/en)
	- [Node Package Manager](https://www.npmjs.com/)
	- [Express API](https://expressjs.com/en/api.html)
	- [TypeScript](https://www.typescriptlang.org/) 
	- [MySQL](https://www.mysql.com/)

---
## Screenshots

### MySQL Database ER Diagram
This is how the MySQL database is structured for this activity.

![erdiagram](../Activity1Screenshots/Pasted%20image%2020250203121223.png)

### API Endpoints

Here is a table of all the API endpoints with a postman image of the API in action:

| URL                                                     | POSTMAN IMAGE                       | BROWSER IMAGE                       | REST ACTION |
| ------------------------------------------------------- | ----------------------------------- | ----------------------------------- | ----------- |
| http://localhost:3000/albums                            | ![](../Activity1Screenshots/Pasted%20image%2020250203122450.png) | ![Albums Browser Image](../Activity1Screenshots/Pasted%20image%2020250203130139.png)| GET         |
| http://localhost:3000/artists                           | ![](../Activity1Screenshots/Pasted%20image%2020250203122521.png) | ![Artist Browser Image](../Activity1Screenshots/Pasted%20image%2020250203130139.png) | GET         |
| http://localhost:3000/albums?albumId=1                  | ![](../Activity1Screenshots/Pasted%20image%2020250203122552.png) | ![](../Activity1Screenshots/Pasted%20image%2020250203130244.png) | GET         |
| http://localhost:3000/albums/search/artist/:search      | ![](../Activity1Screenshots/Pasted%20image%2020250203122618.png) | ![](../Activity1Screenshots/Pasted%20image%2020250203130313.png) | GET         |
| http://localhost:3000/albums/search/description/:search | ![](../Activity1Screenshots/Pasted%20image%2020250203122659.png) | ![](../Activity1Screenshots/Pasted%20image%2020250203130354.png) | GET         |
| http://localhost:3000/albums                            | ![](../Activity1Screenshots/Pasted%20image%2020250203122733.png) | N/A                                 | POST        |
| http://localhost:3000/albums                            | ![](../Activity1Screenshots/Pasted%20image%2020250203122822.png) | N/A                                 | PUT         |

### Application Console

This is a screenshot of the application's console. It is showing the POST's request body and the `OKPacket` the application sent after receiving the request. 
![](../Activity1Screenshots/Pasted%20image%2020250203123223.png)

### Environment Variables

```env
#MySQL Settings
MY_SQL_DB_HOST=127.0.0.1
MY_SQL_DB_USER=root
MY_SQL_DB_PASSWORD=root
MY_SQL_DB_PORT=8889
MY_SQL_DB_DATABASE=music
MY_SQL_DB_CONNECTION_LIMIT=10

#Server Settings  
PORT=3000
NODE_ENV=development
GREETING=Hello from the environment file. Be kind to the environment!
```


---
## Video Recording

- [Video Recording](https://youtu.be/s3_xOrlZDb4)

## Conculsion

 - ...