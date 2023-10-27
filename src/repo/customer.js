const knex = require("../config/connection");
const createCustomer = async (customerData) => {
  const registeredCustomer = await knex("customers")
    .insert(customerData)
    .returning({
      id: "id",
      name: "name",
      email: "email",
    });
  return registeredCustomer[0];
};

const isEmailRegistered = async (email) => {
  const emailFound = await knex("customers").where({ email }).first();
  return emailFound;
};

const isCpfRegistered = async (cpf) => {
  const registeredCpf = await knex("customers").where({ cpf }).first();
  return registeredCpf;
};

const findCustomers = async () => {
  const customers = await knex("customers");
  return customers;
};

const findCustomerById = async (id) => {
  const customer = await knex("customers").where({ id }).first();
  return customer;
};

const modifyCustomer = async (id, customerData) => {
  const updatedCustomer = await knex("customers")
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
