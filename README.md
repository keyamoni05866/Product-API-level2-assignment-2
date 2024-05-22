## Introduction

This is basically E-Commerce backend api creation project which is using Mongoose for MongoDB interaction and Node.js for server, also used TypeScript.

## Features

- CRUD operations.
- Data validation with Zod.
- Error handling.
- Configurable via environment variables.

## Instructions on how to run the application locally

## Steps

1. Clone the Repository --- https://github.com/keyamoni05866/Product-API-level2-assignment-2.git
2. Install Dependencies. --- npm install
3. Set up the Env variables:<br>

- Create a .env file in the root directory.
- Add the following environment variables:<br>
  PORT=5000<br>
  DATABASE_URL= The connection string for your MongoDB database.

## Running the server

-in package.json file there is 2 scripts for run the server.example:<br>

- start:prod(this is for javascript file ).
- start:dev(this is for typescript file).

## API Endpoints

Below are the available API endpoints:<br>
----- for Products -----

- _POST/api/products/create-product_: This for create products.
- _GET/api/products_: This for get all products.
- _GET/api/products/:productId_: This for get a single products.
- _GET/api/products?searchTerm=samsung_: This is for search query result.
- _PUT/api/products/:productId_: This is for update a product.
- _DELETE/api/products/:productId_: This is for DELETE a product. <br>
  ----- for Orders ----- <br>

- _POST/api/orders/create-product_: This for create order.
- _POST/api/orders_: This for get orders.
- _GET/api/orders?email=emailName_: This is for search query result for email.

## Live Link -- https://ecommerse-backend-api-gray.vercel.app/
