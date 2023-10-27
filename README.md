  <h1>Sales Point API Documentation</h1>

  <p>This documentation provides an overview of the endpoints and functionalities of the Sales Point API. The API allows you to manage categories, users, products, customers, and orders.</p>

  <h2>Categories</h2>

  <table border="1">
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Method</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>GET /category</td>
        <td>GET</td>
        <td>Retrieve a list of categories.</td>
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
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>POST /user</td>
        <td>POST</td>
        <td>Register a new user with the specified information.</td>
      </tr>
      <tr>
        <td>POST /login</td>
        <td>POST</td>
        <td>Log in with a registered user account.</td>
      </tr>
      <tr>
        <td>GET /user</td>
        <td>GET</td>
        <td>Get information about the currently logged-in user.</td>
      </tr>
      <tr>
        <td>PUT /user</td>
        <td>PUT</td>
        <td>Update user data for the currently logged-in user.</td>
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
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>POST /product</td>
        <td>POST</td>
        <td>Register a new product with the specified information.</td>
      </tr>
      <tr>
        <td>PUT /product/:id</td>
        <td>PUT</td>
        <td>Update product information for a specific product.</td>
      </tr>
      <tr>
        <td>GET /product?category_id=id</td>
        <td>GET</td>
        <td>Retrieve products filtered by category.</td>
      </tr>
      <tr>
        <td>GET /product/:id</td>
        <td>GET</td>
        <td>Retrieve detailed information about a specific product.</td>
      </tr>
      <tr>
        <td>DELETE /product/:id</td>
        <td>DELETE</td>
        <td>Delete a specific product.</td>
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
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>POST /customer</td>
        <td>POST</td>
        <td>Register a new customer with the specified information.</td>
      </tr>
      <tr>
        <td>PUT /customer/:id</td>
        <td>PUT</td>
        <td>Update customer information for a specific customer.</td>
      </tr>
      <tr>
        <td>GET /customer/</td>
        <td>GET</td>
        <td>Retrieve a list of customers.</td>
      </tr>
      <tr>
        <td>GET /customer/:id</td>
        <td>GET</td>
        <td>Retrieve detailed information about a specific customer.</td>
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
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>POST /order</td>
        <td>POST</td>
        <td>Create a new order with the specified information.</td>
      </tr>
      <tr>
        <td>GET /order</td>
        <td>GET</td>
        <td>Retrieve a list of orders.</td>
      </tr>
    </tbody>
  </table>

  <p>This documentation outlines the endpoints and usage of the Sales Point API. Please make sure to replace <token> and other placeholders with the actual values when making API requests.</p>
</body>
</html>
