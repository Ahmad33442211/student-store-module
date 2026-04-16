# Student Store Module

## Project Overview
This project is a full stack store module created for managing products in an e-commerce application. It allows users to add, view, update, and delete products. The product data is stored in MongoDB Atlas, and the backend is built with Node.js, Express.js, and Mongoose.

## Disclaimer
This project is student work and is for demonstration of web development skills only.

## Features
- Add a new product
- View all products
- View one product by ID
- Update a product
- Delete a product
- Store product data in MongoDB Atlas
- Test the API using Jest and Supertest
- Run automated testing with automate.js

## Tools Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- HTML
- CSS
- JavaScript
- Jest
- Supertest

## Project Files
- public/ for frontend files
- models/ for database models
- routes/ for API routes
- tests/ for testing
- app.js for the main application
- server.js for starting the server
- db.js for database connection
- automate.js for automated test output

## Installation
1. Open the project in VS Code
2. Run npm install
3. Create a .env file
4. Add:
   - PORT=3000
   - DB_URI=your_mongodb_connection_string
5. Run node server.js

## How to Use
1. Open http://localhost:3000
2. Enter the product details
3. Click *Add Product*
4. The product will appear in the list
5. Update or delete a product when needed

## API Routes
- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id

## Testing
Run:
npm.cmd test

Run the automation file:
node automate.js

## Deployment Links
- Render: https://student-store-module.onrender.com
- API: https://student-store-module.onrender.com/api/products
- GitHub: https://github.com/Ahmad33442211/student-store-module