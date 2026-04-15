# Student Store Module

## Project Overview
This project is a simple full stack store module made for managing products.  
The user can add products, view all saved products, and delete products.  
The data is stored in MongoDB Atlas.

## Features
- Add a new product
- View all products
- Delete a product
- Save data in MongoDB Atlas
- Test the API using Jest and Supertest
- Run an automation file

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
- app.js for the main app
- server.js to start the server
- db.js for database connection
- automate.js for automation testing

## Installation
1. Open the project in VS Code
2. Run npm install
3. Create a .env file
4. Add:
   - PORT=3000
   - DB_URI=your_mongodb_connection_string
5. Run npm.cmd run dev

## How to Use
1. Open http://localhost:3000
2. Enter the product details
3. Click *Add Product*
4. The product will be shown in the list
5. Click *Delete* if you want to remove a product

## API Routes
- GET /api/products
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id

## Testing
Run:
```bash
npm.cmd test