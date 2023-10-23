const knex = require("../config/connection");

const isEmailRegistered = async (email) => {
  const registeredEmail = await knex("usuarios").where({ email }).first();
  return registeredEmail;
};

const findUserById = async (id) => {
  const registeredId = await knex("usuarios").where({ id }).first();
  return registeredId;
};

const createUser = async (userData) => {
  const registeredUser = await knex("usuarios").insert(userData).returning({
    id: "id",
    nome: "nome",
    email: "email",
  });

  return registeredUser[0];
};

const getLoggedUser = async (id) => {
  const user = await knex("usuarios")
    .select("id", "nome", "email")
    .where("id", id)
    .first();

  return user;
};

const modifyUser = async (id, dadosDoUsuario) => {
  const updateUser = await knex("usuarios")
    .where({ id })
    .update(dadosDoUsuario);

  return updateUser;
};

module.exports = {
  isEmailRegistered,
  findUserById,
  createUser,
  getLoggedUser,
  modifyUser,
};
