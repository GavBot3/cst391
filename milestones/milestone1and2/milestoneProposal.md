
# CST-391 JavaScript Web Application Development

## Property Manager Application

---
### Author: Gavin Kuehn
### Date: January 19, 2025

---
#### Instructor Feedback
"Gavin, thank you for meeting all requirements on this assignment."

No adjustments have been made because it already met requirements. The only change is the addition of the REST API endpoints.

#### Introduction
This application will be used to manage properties a person may own. For example, a real estate inventor may own up to 100 properties, including resident homes, apartment buildings, and commercial buildings. This application can be a singular place for the owner to manage rent payments, facility requests, see property details, track vacancy, and manage tenants. The scope for this project will include a front end to list a singular "product", which is a residential property in this case. There will also be support for all CRUD operations in which the application will be connected to a MySQL database. Users will need to create an account to log in and see their created properties.

#### Functional Requirements
Here is a table of initial user stories for the project:

| **ID** | **User Story**                                                                                                                    |
| ------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 1      | As a user, I want to create an account with a username and password                                                               |
| 2      | As a user, I want to log in to the website using my created account                                                               |
| 3      | As a user, I want to see a list of all the properties associated with my account                                                  |
| 4      | As a user, I want to create new properties that will go into my account                                                           |
| 5      | As a user, I want to edit previously created properties                                                                           |
| 6      | As a user, I want to delete previously created properties                                                                         |
| 7      | As a user, I want to edit important account information                                                                           |
| 8      | As a developer, I want the application to integrate with a MySQL database so that I can perform CRUD operations on property data. |
| 9      | As a developer, I want to ensure all user data is securely stored in the database so that sensitive information is protected.     |
| 10     | As a user, I want to reset my password in case I forget it so that I can regain access to my account.                             |

#### Database Design
Here is the ER diagram for my database:
![](../screenshots/Pasted%20image%2020250115160555.png)

#### UI Sitemap
Here is a diagram of how the user will navigate the website:
![](../screenshots/Pasted%20image%2020250117125708.png)

#### UI Wireframes
There are the low fidelity wireframes for all the pages in the application.
##### Home Page
![](../screenshots/Pasted%20image%2020250117114409.png)
##### Login Page
![](../screenshots/Pasted%20image%2020250117114643.png)
##### Register Page
![](../screenshots/Pasted%20image%2020250117114733.png)
##### Portfolio Page
![](../screenshots/Pasted%20image%2020250117114746.png)
##### Create Estate Page
![](../screenshots/Pasted%20image%2020250117114817.png)
##### Update Estate Page
![](../screenshots/Pasted%20image%2020250117114843.png)
##### Account Page
![](../screenshots/Pasted%20image%2020250117114858.png)
#### UML Diagrams
![](../screenshots/Pasted%20image%2020250117113958.png)

#### Risks
This is a list of the risks and unknowns that could come up during this project:

| ID  | Risk                                                                                                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Limited knowledge about the JavaScript language and the frameworks will require time to be spend learning them.                                                         |
| 2   | Balancing milestones with other course requirements or other courses can lead to rushed or incomplete work.                                                             |
| 3   | Issues may arise while integrating the back-end API with the front-end applications (React and Angular), such as mismatched data structures or incorrect API endpoints. |

### REST API

These are the URLs for the API methods within this application:

| HTTP Verb | Endpoint                  | Purpose                          |
| --------- | ------------------------- | -------------------------------- |
| GET       | `/users/{userId}/estates` | Get all estates for user with ID |
| GET       | `/users`                  | Get list of all users            |
| GET       | `/users/{userId}`         | Get details of user with ID      |
| GET       | `/estates`                | Get list of all estates          |
| POST      | `/estates`                | Create a new Estate              |
| DELETE    | `/estates/{estatesId}`    | Delete estate by ID              |
