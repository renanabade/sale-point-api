CREATE DATABASE pdv;

CREATE TABLE users (
  id serial primary key,
  name varchar(100) not null,
  email varchar(100) not null unique,
  password text not null
);

CREATE TABLE categories (
  id serial primary key,
  description text not null
);

INSERT INTO
  categories(description)
VALUES
  ('Computer Science'),
  ('Cell Phones'),
  ('Beauty and Perfumery'),
  ('Groceries'),
  ('Books and Stationery'),
  ('Toys'),
  ('Fashion'),
  ('Baby'),
  ('Games');

CREATE TABLE products (
  id serial primary key,
  description text not null,
  stockQuantity integer not null,
  value integer not null,
  categoryId integer not null references categories(id),
  productImage text
);

CREATE TABLE customers (
  id serial primary key,
  name text not null,
  email text not null unique,
  cpf VARCHAR(11) not null unique,
  zipCode VARCHAR(8),
  street text,
  number text,
  district text,
  city text,
  state VARCHAR(2)
);

CREATE TABLE orders (
  id serial primary key,
  customerId integer not null references customers(id),
  note text,
  totalValue integer not null
);

CREATE TABLE orderProducts (
  id serial primary key,
  orderId integer not null references orders(id),
  productId integer not null references products(id),
  productQuantity integer not null,
  productValue integer not null
);
