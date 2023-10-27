require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtPassword = process.env.JWTPASSWORD;

const genToken = (data) => {
  const { id, name } = data;
  const token = jwt.sign(
    {
      id,
      name,
    },
    `${jwtPassword}`,
    { expiresIn: "1h" }
  );
  return token;
};

module.exports = { genToken };
