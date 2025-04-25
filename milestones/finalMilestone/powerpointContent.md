# Real Estate Management Application

## Overview
This project is a full-stack real estate management application that allows users to perform CRUD operations on property "products" (estates). It features a REST API built with Node.js and Express, and two separate front ends—one using Angular and the other using React.

## Features
- Full CRUD functionality for estate products and users
- REST API endpoints to manage data
- Dual front-end support: Angular and React
- Data filtering via query parameters (e.g., by ID or email)
- Responsive and accessible front-end design following best practices

## REST API Endpoints
GET /users
GET /estates
GET /estates/owner/:ownerId
POST /users
PUT /users
DELETE /users/:userId
POST /estates
PUT /estates
DELETE /estates/:estateId


## Challenges Faced
- Learning JavaScript and TypeScript syntax
- Adapting the application to React from Angular
- Issues with the edit component (React: mostly resolved; Angular: owner ID bug)

## Pending Bugs
- Angular version: Editing an estate always sets `ownerId` to 1 instead of the original owner

## Lessons Learned
- Effectively integrating and using a RESTful API
- Building front-end applications with Angular and React
- Switching frameworks is manageable with a well-structured backend
- Preference for React due to familiarity with similar frameworks

## Christian Worldview Reflection
Web development offers a platform to serve others and reflect Christ’s love. Accessibility is a vital part of this, ensuring users of all abilities can access and interact with the application.

### Accessibility Best Practices
- Use semantic HTML (`<header>`, `<footer>`, etc.)
- Maintain contrast and readability
- Enable full keyboard navigation
- Ensure responsive design across devices

## Future Improvements
- Implement login and registration functionality
- Expand estate management features
- Resolve remaining Angular bug

## Conclusion
The project now supports full CRUD operations with a reliable REST API and two robust front ends. It provides a solid foundation for further development, including user authentication and enhanced data management.

---



