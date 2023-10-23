const bcrypt = require("bcrypt");

const checkPass = async (password, encryptedPass) => {
  return await bcrypt.compare(password, encryptedPass);
};

module.exports = { checkPass };
