const knex = require("../config/connection");
const createCustomer = async (customerData) => {
  const registeredCustomer = await knex("clientes")
    .insert(customerData)
    .returning({
      id: "id",
      nome: "nome",
      email: "email",
    });
  return registeredCustomer[0];
};

const isEmailRegistered = async (email) => {
  const emailFound = await knex("clientes").where({ email }).first();
  return emailFound;
};

const isCpfRegistered = async (cpf) => {
  const registeredCpf = await knex("clientes").where({ cpf }).first();
  return registeredCpf;
};

const findCustomers = async () => {
  const customers = await knex("clientes");
  return customers;
};

const findCustomerById = async (id) => {
  const customer = await knex("clientes").where({ id }).first();
  return customer;
};

const modifyCustomer = async (id, customerData) => {
  const updatedCustomer = await knex("clientes")
    .where({ id })
    .update(customerData);

  return updatedCustomer;
};

module.exports = {
  createCustomer,
  isEmailRegistered,
  isCpfRegistered,
  findCustomerById,
  modifyCustomer,
  findCustomers,
};
