const bcrypt = require("bcrypt");

const checkPass = async (password, encryptedPass) => {
  return await bcrypt.compare(password, encryptedPass);
};

const encryptPass = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(password, salt);

  return encryptedPassword;
};

module.exports = { checkPass, encryptPass };
