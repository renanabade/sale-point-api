Categories
GET Categories
Retrieve a list of categories.

URL: http://localhost:3000/category
Users
POST Register User
Register a new user with the specified information.

URL: http://localhost:3000/user
Request Body (raw JSON):
json
Copy code
{
"name": "random name",
"email": "user@email.com",
"password": "password"
}
POST User Login
Log in with a registered user account.

URL: http://localhost:3000/login
Authorization:
Bearer Token: <token>
Request Body (raw JSON):
json
Copy code
{
"email": "user@email.com",
"password": "password"
}
GET Verify Logged User
Get information about the currently logged-in user.

URL: http://localhost:3000/user
Authorization:
Bearer Token: <token>
PUT Modify Logged User Data
Update user data for the currently logged-in user.

URL: http://localhost:3000/user
Authorization:
Bearer Token: <token>
Request Body (raw JSON):
json
Copy code
{
"name": "random user",
"email": "another_random@email.com",
"password": "password"
}
Products
POST Register Product
Register a new product with the specified information.

URL: http://localhost:3000/product
Authorization:
Bearer Token: <token>
Request Body (form-data):
description
product
stock_quantity
image
image_path
value
category_id
PUT Modify Product Data
Update product information for a specific product.

URL: http://localhost:3000/product/:id
Authorization:
Bearer Token: <token>
Path Variables:
id
Request Body (form-data):
description
stock_quantity
value
category_id
image
image_path
GET Print Products
Retrieve products filtered by category.

URL: http://localhost:3000/product?category_id=id
Authorization:
Bearer Token: <token>
Query Params:
category_id
GET Detail Product
Retrieve detailed information about a specific product.

URL: http://localhost:3000/product/:id
Authorization:
Bearer Token: <token>
Path Variables:
id
DELETE Delete Product
Delete a specific product.

URL: http://localhost:3000/product/:id
Authorization:
Bearer Token: <token>
Path Variables:
id
Customers
POST Register Customer
Register a new customer with the specified information.

URL: http://localhost:3000/customer
Authorization:
Bearer Token: <token>
Request Body (raw JSON):
json
Copy code
{
"name": "random",
"email": "random@email.com",
"cpf": "00000000000", // Brazil CPF here
"zip_code": "00000000",
"street": "street",
"number": "number",
"city": "city",
"district": "district",
"state": "aa" // Brazil states, only two characters
}
PUT Update Customer Data
Update customer information for a specific customer.

URL: http://localhost:3000/customer/:id
Authorization:
Bearer Token: <token>
Path Variables:
id
Request Body (raw JSON):
json
Copy code
{
"name": "random",
"email": "email@random.com",
"cpf": "00000000000",
"zip_code": "00000000",
"street": "street",
"number": "00",
"city": "city",
"district": "district",
"state": "aa"
}
GET Print Customers
Retrieve a list of customers.

URL: http://localhost:3000/customer/
Authorization:
Bearer Token: <token>
GET Detail Customers
Retrieve detailed information about a specific customer.

URL: http://localhost:3000/customer/:id
Authorization:
Bearer Token: <token>
Path Variables:
id
Orders
POST Register Order
Create a new order with the specified information.

URL: http://localhost:3000/order
Authorization:
Bearer Token: <token>
Request Body (raw JSON):
json
Copy code
{
"customer_id": 1,
"note": "notes here",
"order_products": [
{
"product_id": "1",
"product_quantity": "10"
}
]
}
GET Print Orders
Retrieve a list of orders.

URL: http://localhost:3000/order
Authorization:
Bearer Token: <token>
This documentation outlines the endpoints and usage of the Sales Point API. Please make sure to replace <token> and other placeholders with the actual values when making API requests.
