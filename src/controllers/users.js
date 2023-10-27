const {
  isEmailRegistered,
  createUser,
  getLoggedUser,
  modifyUser,
} = require("../repo/users");
const { checkPass, encryptPass } = require("../services/password");
const { genToken } = require("../services/jwt");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const emailLower = email.toLowerCase();

  try {
    const emailRegistered = await isEmailRegistered(emailLower);
    if (emailRegistered) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const encryptedPassword = await encryptPass(password);

    const userData = {
      name,
      email: emailLower,
      password: encryptedPassword,
    };

    const registeredUser = await createUser(userData);
    if (!registeredUser) {
      return res.status(400).json({ message: "Unable to register the user" });
    }

    return res.status(201).json(registeredUser);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const printLoggedUser = async (req, res) => {
  const { id } = req.user;

  if (!id) {
    return res.status(404).json({ message: "User not found" });
  }

  try {
    const loggedUser = await getLoggedUser(id);

    if (!loggedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(loggedUser);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const emailLower = email.toLowerCase();

  try {
    const emailRegistered = await isEmailRegistered(emailLower);

    if (!emailRegistered) {
      return res.status(400).json({
        message: "Invalid user and/or password.",
      });
    }

    const encryptedPassword = emailRegistered.password;

    if (await checkPass(password, encryptedPassword)) {
      const { id, name, email } = emailRegistered;
      const token = genToken(emailRegistered);
      return res.status(200).json({
        user: {
          id,
          name,
          email,
        },
        token,
      });
    }

    return res.status(400).json({
      message: "Invalid user and/or password.",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.user;
  const { name, email, password } = req.body;
  const emailLower = email.toLowerCase();

  try {
    const emailFound = await isEmailRegistered(emailLower);

    if (emailFound && emailFound.id != id) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const encryptedPassword = await encryptPass(password);

    const userData = {
      name,
      email: emailLower,
      password: encryptedPassword,
    };

    const updatedUser = await modifyUser(id, userData);

    if (!updatedUser) {
      return res.status(400).json({ message: "Unable to update the user" });
    }

    return res.status(204).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  registerUser,
  printLoggedUser,
  loginUser,
  updateUser,
};
