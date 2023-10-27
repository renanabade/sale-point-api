# Project: Sales Point API
# 📁 Collection: Categories 


## End-point: Get Categories
### Method: GET
>```
>http://localhost:3000/category
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Users 


## End-point: Register user
### Method: POST
>```
>http://localhost:3000/user
>```
### Body (**raw**)

```json
{
    "name": "random name",
    "email": "user@email.com",
    "password": "password"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: User login
### Method: POST
>```
>http://localhost:3000/login
>```
### Body (**raw**)

```json
{
    "email": "user@email.com",
    "password": "password"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6InJhbmRvbSBuYW1lIiwiaWF0IjoxNjk4NDM4NzgwLCJleHAiOjE2OTg0NDIzODB9.Xxd96xl-7VtjHLRas-2vy_u_mGtRzTYTFxp_KSyTb3Y|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Verify Logged User
### Method: GET
>```
>http://localhost:3000/user
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6InJhbmRvbSBuYW1lIiwiaWF0IjoxNjk4NDM4Nzk4LCJleHAiOjE2OTg0NDIzOTh9.IYQMrjm0pQ3w_El-2y2ZnvJ4Ouzr3TT1a46F7T2ceLg|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Modify Logged User Data
### Method: PUT
>```
>http://localhost:3000/user
>```
### Body (**raw**)

```json
{
    "name": "random user",
    "email": "another_random@email.com",
    "password": "password"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InJlbmFuIiwiaWF0IjoxNjk4NDMwOTQ4LCJleHAiOjE2OTg0MzQ1NDh9.k_lglOYLMm22YydBHoKEMvU6ojAULSc4HJdgy4ggfNc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Products 


## End-point: Register Product
### Method: POST
>```
>http://localhost:3000/product
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|description|product|text|
|stock_quantity|58
|text|
|image|undefined|file|
|value|20000|text|
|category_id|2|text|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InJlbmFuIiwiaWF0IjoxNjk4NDMwOTQ4LCJleHAiOjE2OTg0MzQ1NDh9.k_lglOYLMm22YydBHoKEMvU6ojAULSc4HJdgy4ggfNc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Modify Product Data
### Method: PUT
>```
>http://localhost:3000/product/:id
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|description|another product|text|
|stock_quantity|10|text|
|value|30000|text|
|category_id|2|text|
|image|undefined|file|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InJlbmFuIiwiaWF0IjoxNjk4NDMwOTQ4LCJleHAiOjE2OTg0MzQ1NDh9.k_lglOYLMm22YydBHoKEMvU6ojAULSc4HJdgy4ggfNc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Print Products
### Method: GET
>```
>http://localhost:3000/product?category_id=id
>```
### Body (**raw**)

```json

```

### Query Params

|Param|value|
|---|---|
|category_id|id|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InJlbmFuIiwiaWF0IjoxNjk4NDMwOTQ4LCJleHAiOjE2OTg0MzQ1NDh9.k_lglOYLMm22YydBHoKEMvU6ojAULSc4HJdgy4ggfNc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Detail Product
### Method: GET
>```
>http://localhost:3000/product/:id
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InJlbmFuIiwiaWF0IjoxNjk4NDMwOTQ4LCJleHAiOjE2OTg0MzQ1NDh9.k_lglOYLMm22YydBHoKEMvU6ojAULSc4HJdgy4ggfNc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Product
### Method: DELETE
>```
>http://localhost:3000/product/:id
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InJ5YW4gb2xpdmVpcmEiLCJpYXQiOjE2OTg0MzgxMzMsImV4cCI6MTY5ODQ0MTczM30.pBst_OstcSxTdl2VRE7hZh00SkTAvEY90ey1ZIBanRI|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Customers 


## End-point: Register Customer
### Method: POST
>```
>http://localhost:3000/customer
>```
### Body (**raw**)

```json
{
    "name": "random",
    "email": "random@email.com",
    "cpf": "00000000000", //brazil cpf here
    "zip_code": "00000000",
    "street": "street",
    "number": "number",
    "city": "city",
    "district": "district",
    "state": "aa"//brazil states, only two char"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InJ5YW4gb2xpdmVpcmEiLCJpYXQiOjE2OTg0MzQ2MTQsImV4cCI6MTY5ODQzODIxNH0.WC3poA6jnwQE02jSKjAD_xegqs0a-2r8zQGOguApbF8|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Customer Data
### Method: PUT
>```
>http://localhost:3000/customer/:id
>```
### Body (**raw**)

```json
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
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InJ5YW4gb2xpdmVpcmEiLCJpYXQiOjE2OTg0MzQ2MTQsImV4cCI6MTY5ODQzODIxNH0.WC3poA6jnwQE02jSKjAD_xegqs0a-2r8zQGOguApbF8|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Print customers
### Method: GET
>```
>http://localhost:3000/customer/
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InJ5YW4gb2xpdmVpcmEiLCJpYXQiOjE2OTg0MzQ2MTQsImV4cCI6MTY5ODQzODIxNH0.WC3poA6jnwQE02jSKjAD_xegqs0a-2r8zQGOguApbF8|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Detail customers
### Method: GET
>```
>http://localhost:3000/customer/:id
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InJ5YW4gb2xpdmVpcmEiLCJpYXQiOjE2OTg0MzQ2MTQsImV4cCI6MTY5ODQzODIxNH0.WC3poA6jnwQE02jSKjAD_xegqs0a-2r8zQGOguApbF8|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Orders 


## End-point: Register Order
### Method: POST
>```
>http://localhost:3000/order
>```
### Body (**raw**)

```json
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
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InJ5YW4gb2xpdmVpcmEiLCJpYXQiOjE2OTg0MzQ2MTQsImV4cCI6MTY5ODQzODIxNH0.WC3poA6jnwQE02jSKjAD_xegqs0a-2r8zQGOguApbF8|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Print Orders
### Method: GET
>```
>http://localhost:3000/order
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InJ5YW4gb2xpdmVpcmEiLCJpYXQiOjE2OTg0MzQ2MTQsImV4cCI6MTY5ODQzODIxNH0.WC3poA6jnwQE02jSKjAD_xegqs0a-2r8zQGOguApbF8|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
