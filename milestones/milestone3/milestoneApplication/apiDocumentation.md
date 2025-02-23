## Introduction

This API provides endpoints for managing users and estates. It allows retrieving, creating, updating, and deleting users and estates.
## Base URL

```
http://localhost:3000
```

## Endpoints

### Users

#### Get All Users

- **Endpoint:** `GET /users`
- **Description:** Retrieve a list of all users.
- **Response Example:**

``` json
[
    {
        "id": 1,
        "firstName": "Gavin",
        "lastName": "Kuehn",
        "email": "gdkuehn03@gmail.com",
        "phoneNumber": "6027393046",
        "status": "Active",
        "creationDate": "2024-04-08T22:10:22.000Z",
        "lastLoginDate": "2024-05-28T01:20:11.000Z"
    }
]
 ```

#### Get User by Email

- **Endpoint:** `GET /users`
- **Description:** Retrieve details of a user by their email.
- **Path Query:**
    - `email` (string) - User's email address.
#### Get User by ID

- **Endpoint:** `GET /users`
- **Description:** Retrieve details of a user by their ID.
- **Path Query:**
    - `userId` (string) - User's unique identifier.
#### Create a New User

- **Endpoint:** `POST /users`
- **Description:** Create a new user.
- **Request Body:**

``` json
{
    "id": 1,
    "firstName": "Gavin",
    "lastName": "Kuehn",
    "email": "gdkuehn03@gmail.com",
    "phoneNumber": "6027393046",
    "status": "Active",
    "creationDate": "2024-04-08T22:10:22.000Z",
    "lastLoginDate": "2024-05-28T01:20:11.000Z"
}
 ```

#### Update User Details

- **Endpoint:** `PUT /users`
- **Description:** Update user details.
- **Request Body:**

``` json
{
    "id": 1,
    "firstName": "Gavin",
    "lastName": "Kuehn",
    "email": "gdkuehn03@gmail.com",
    "phoneNumber": "6027393046",
    "status": "Active",
    "creationDate": "2024-04-08T22:10:22.000Z",
    "lastLoginDate": "2024-05-28T01:20:11.000Z"
}
 ```

#### Delete User by ID

- **Endpoint:** `DELETE /users/{userId}`
- **Description:** Delete a user by their ID.
- **Path Parameter:**
    - `userId` (string) - User's unique identifier.

---
### Estates

#### Get All Estates

- **Endpoint:** `GET /estates`
- **Description:** Retrieve a list of all estates.
- **Response Example:**

``` json
[
    {
        "id": 1,
        "type": "House",
        "ownerId": 1,
        "costOfRent": 300,
        "pictureLocation": null,
        "address": "850 E Hampton Ln"
    }
]
```

#### Get Estate by ID

- **Endpoint:** `GET /estates`
- **Description:** Retrieve details of an estate by its ID.
- **Path Query:**
    - `estateId` (string) - Estate's unique identifier.
#### Get Estates by Owner

- **Endpoint:** `GET /estates/owner/{ownerId}`
- **Description:** Retrieve all estates owned by a specific user.
- **Path Parameter:**
    - `ownerId` (string) - Owner's unique identifier.
#### Create a New Estate

- **Endpoint:** `POST /estates`
- **Description:** Create a new estate.
- **Request Body:**

``` json
{
    "id": 1,
    "type": "House",
    "ownerId": 1,
    "costOfRent": 300,
    "pictureLocation": null,
    "address": "850 South Hampton Drive"
}
 ```

#### Update Estate Details

- **Endpoint:** `PUT /estates`
- **Description:** Update estate details.
- **Request Body:**

``` json
{
    "id": 1,
    "type": "Town Home",
    "ownerId": 1,
    "costOfRent": 700,
    "pictureLocation": null,
    "address": "850 South Hampton Drive"
}
 ```

#### Delete Estate by ID

- **Endpoint:** `DELETE /estates/{id}`
- **Description:** Delete an estate by its ID.
- **Path Parameter:**
    - `id` (string) - Estate's unique identifier.
## Error Handling

Common response codes:
- `200 OK` - Successful request
- `201 Created` - Successfully created a resource
- `400 Bad Request` - Invalid request
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server-side error

## Conclusion

This API allows efficient management of users and estates through structured endpoints. Ensure to handle errors and authentication properly when integrating with applications.