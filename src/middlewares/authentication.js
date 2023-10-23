const jwt = require("jsonwebtoken");
const { findUserById } = require("../repo/users");
const jwtPassword = process.env.JWTPASSWORD;

const verifyLoggedInUser = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Login is required" });
  }

  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    const { id } = jwt.verify(token, jwtPassword);
    const user = await findUserById(id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message:
        "To access this resource, a valid authentication token must be sent.",
    });
  }
};

module.exports = verifyLoggedInUser;