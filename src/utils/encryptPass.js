const bcrypt = require("bcrypt");

const encryptPass = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(password, salt);

  return encryptedPassword;
};

module.exports = {
  encryptPass,
};
