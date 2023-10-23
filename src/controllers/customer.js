const {
  createCustomer,
  isCpfRegistered,
  isEmailRegistered,
  modifyCustomer,
  findCustomerById,
  findCustomers,
} = require("../repo/customer");

const insertCustomer = async (req, res) => {
  const { name, email, cpf, zipCode, street, number, neighborhood, city, state } =
    req.body;
  const emailLower = email.toLowerCase();
  const cpfOnlyNumbers = cpf.split(".").join("").split("-").join("");
  let zipCodeOnlyNumbers = null;

  if (zipCode) {
    zipCodeOnlyNumbers = zipCode.split(" ").join("").split("-").join("");
  }

  try {
    const emailRegistered = await isEmailRegistered(emailLower);

    if (emailRegistered) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const cpfRegistered = await isCpfRegistered(cpfOnlyNumbers);

    if (cpfRegistered) {
      return res.status(400).json({ message: "Cpf already registered" });
    }

    const customerData = {
      name,
      email: emailLower,
      cpf: cpfOnlyNumbers,
      zipCode: zipCodeOnlyNumbers ? zipCodeOnlyNumbers : null,
      street: street ? street : null,
      number: number ? number : null,
      neighborhood: neighborhood ? neighborhood : null,
      city: city ? city : null,
      state: state ? state : null,
    };

    const registeredCustomer = await createCustomer(customerData);
    if (!registeredCustomer) {
      return res.status(404).json("Could not register the customer");
    }
    return res.status(201).json(registeredCustomer);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name, email, cpf, zipCode, street, number, neighborhood, city, state } =
    req.body;
  const emailLower = email.toLowerCase();
  const cpfOnlyNumbers = cpf.split(".").join("").split("-").join("");
  let zipCodeOnlyNumbers = null;

  if (zipCode) {
    zipCodeOnlyNumbers = zipCode.split(" ").join("").split("-").join("");
  }

  try {
    const emailFound = await isEmailRegistered(emailLower);

    if (emailFound && emailFound.id != id) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const cpfRegistered = await isCpfRegistered(cpfOnlyNumbers);

    if (cpfRegistered && cpfRegistered.id != id) {
      return res.status(400).json({ message: "Cpf already registered" });
    }

    const customer = await findCustomerById(id);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    const customerData = {
      name,
      email: emailLower,
      cpf: cpfOnlyNumbers,
      zipCode: zipCodeOnlyNumbers ? zipCodeOnlyNumbers : null,
      street: street ? street : null,
      number: number ? number : null,
      neighborhood: neighborhood ? neighborhood : null,
      city: city ? city : null,
      state: state ? state : null,
    };

    const modifiedCustomer = await modifyCustomer(id, customerData);
    if (!modifiedCustomer) {
      return res
        .status(400)
        .json({ message: "Could not edit the customer" });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const printCustomers = async (req, res) => {
  try {
    const customers = await findCustomers();
    if (!customers) {
      return res.status(404).json({ message: "No registered customers" });
    }
    return res.status(200).json(customers);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const printSelectedCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await findCustomerById(id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  insertCustomer,
  updateCustomer,
  printCustomers,
  printSelectedCustomer,
};
