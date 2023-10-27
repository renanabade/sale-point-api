CREATE DATABASE sales_point;

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
  stock_quantity integer not null,
  value integer not null,
  category_id integer not null references categories(id),
  product_image text
);

CREATE TABLE customers (
  id serial primary key,
  name text not null,
  email text not null unique,
  cpf VARCHAR(11) not null unique,
  zip_code VARCHAR(8),
  street text,
  number text,
  district text,
  city text,
  state VARCHAR(2)
);

CREATE TABLE orders (
  id serial primary key,
  customer_id integer not null references customers(id),
  note text,
  total_value integer not null
);

CREATE TABLE order_products (
  id serial primary key,
  order_id integer not null references orders(id),
  product_id integer not null references products(id),
  product_quantity integer not null,
  product_value integer not null
);
