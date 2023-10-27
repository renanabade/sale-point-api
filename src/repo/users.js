const knex = require("../config/connection");

const isEmailRegistered = async (email) => {
  const registeredEmail = await knex("users").where({ email }).first();
  return registeredEmail;
};

const findUserById = async (id) => {
  const registeredId = await knex("users").where({ id }).first();
  return registeredId;
};

const createUser = async (userData) => {
  const registeredUser = await knex("users").insert(userData).returning({
    id: "id",
    name: "name",
    email: "email",
  });

  return registeredUser[0];
};

const getLoggedUser = async (id) => {
  const user = await knex("users")
    .select("id", "name", "email")
    .where("id", id)
    .first();

  return user;
};

const modifyUser = async (id, userData) => {
  const updateUser = await knex("users").where({ id }).update(userData);

  return updateUser;
};

module.exports = {
  isEmailRegistered,
  findUserById,
  createUser,
  getLoggedUser,
  modifyUser,
};
