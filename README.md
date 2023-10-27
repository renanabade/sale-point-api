<!DOCTYPE html>
<html>
<head>
    <title>Sales Point API Documentation</title>
</head>
<body>
    <h1>Sales Point API Documentation</h1>
    <p>This documentation provides an overview of the endpoints and functionalities of the Sales Point API. The API allows you to manage categories, users, products, customers, and orders.</p>
    <h2>Categories</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Endpoint</th>
                <th>Method</th>
                <th>Description</th>
                <th>Request Body</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>GET /category</td>
                <td>GET</td>
                <td>Retrieve a list of categories.</td>
                <td>N/A</td>
            </tr>
        </tbody>
    </table>
    <h2>Users</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Endpoint</th>
                <th>Method</th>
                <th>Description</th>
                <th>Request Body</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>POST /user</td>
                <td>POST</td>
                <td>Register a new user with the specified information.</td>
                <td>
                    <pre>

{
"name": "random name",
"email": "user@email.com",
"password": "password"
}

</pre>
</td>
</tr>
<tr>
<td>POST /login</td>
<td>POST</td>
<td>Log in with a registered user account.</td>
<td>
<pre>
{
"email": "user@email.com",
"password": "password"
}
</pre>
</td>
</tr>
<tr>
<td>GET /user</td>
<td>GET</td>
<td>Get information about the currently logged-in user.</td>
<td>N/A</td>
</tr>
<tr>
<td>PUT /user</td>
<td>PUT</td>
<td>Update user data for the currently logged-in user.</td>
<td>
<pre>
{
"name": "random user",
"email": "another_random@email.com",
"password": "password"
}
</pre>
</td>
</tr>
</tbody>
</table>

    <h2>Products</h2>

    <table border="1">
        <thead>
            <tr>
                <th>Endpoint</th>
                <th>Method</th>
                <th>Description</th>
                <th>Request Body</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>POST /product</td>
                <td>POST</td>
                <td>Register a new product with the specified information.</td>
                <td>
                    <pre>

{
"description": "Product description",
"stock_quantity": 10,
"value": 50.00,
"category_id": 1,
"image": "product_image",
"image_path": "image_path"
}

</pre>
</td>
</tr>
<tr>
<td>PUT /product/:id</td>
<td>PUT</td>
<td>Update product information for a specific product.</td>
<td>
<pre>
{
"description": "Updated product description",
"stock_quantity": 20,
"value": 60.00,
"category_id": 2,
"image": "updated_product_image",
"image_path": "updated_image_path"
}
</pre>
</td>
</tr>
<tr>
<td>GET /product?category_id=id</td>
<td>GET</td>
<td>Retrieve products filtered by category.</td>
<td>N/A</td>
</tr>
<tr>
<td>GET /product/:id</td>
<td>GET</td>
<td>Retrieve detailed information about a specific product.</td>
<td>N/A</td>
</tr>
<tr>
<td>DELETE /product/:id</td>
<td>DELETE</td>
<td>Delete a specific product.</td>
<td>N/A</td>
</tr>
</tbody>
</table>
<h2>Customers</h2>
<table border="1">
<thead>
<tr>
<th>Endpoint</th>
<th>Method</th>
<th>Description</th>
<th>Request Body</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST /customer</td>
<td>POST</td>
<td>Register a new customer with the specified information.</td>
<td>
<pre>
{
"name": "Customer Name",
"email": "customer@email.com",
"cpf": "00000000000",
"zip_code": "00000000",
"street": "Customer Street",
"number": "123",
"city": "Customer City",
"district": "Customer District",
"state": "CA"
}
</pre>
</td>
</tr>
<tr>
<td>PUT /customer/:id</td>
<td>PUT</td>
<td>Update customer information for a specific customer.</td>
<td>
<pre>
{
"name": "Updated Customer Name",
"email": "updated_customer@email.com",
"cpf": "11111111111",
"zip_code": "11111111",
"street": "Updated Customer Street",
"number": "456",
"city": "Updated Customer City",
"district": "Updated Customer District",
"state": "NY"
}
</pre>
</td>
</tr>
<tr>
<td>GET /customer/</td>
<td>GET</td>
<td>Retrieve a list of customers.</td>
<td>N/A</td>
</tr>
<tr>
<td>GET /customer/:id</td>
<td>GET</td>
<td>Retrieve detailed information about a specific customer.</td>
<td>N/A</td>
</tr>
</tbody>
</table>
<h2>Orders</h2>
<table border="1">
<thead>
<tr>
<th>Endpoint</th>
<th>Method</th>
<th>Description</th>
<th>Request Body</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST /order</td>
<td>POST</td>
<td>Create a new order with the specified information.</td>
<td>
<pre>
{
"customer_id": 1,
"note": "Order notes",
"order_products": [
{
"product_id": 1,
"product_quantity": 10
}
]
}
</pre>
</td>
</tr>
<tr>
<td>GET /order</td>
<td>GET</td>
<td>Retrieve a list of orders.</td>
<td>N/A</td>
</tr>
</tbody>
</table>
<p>This documentation outlines the endpoints and usage of the Sales Point API. Please make sure to replace <code>&lt;token&gt;</code> and other placeholders with the actual values when making API requests.</p>
</body>
</html>
