const fs = require("fs/promises");
const handlebars = require("handlebars");

const compilerMail = async (template, data) => {
  const html = await fs.readFile(template, "utf-8");
  const compiled = handlebars.compile(html.toString());
  return compiled(data);
};

module.exports = compilerMail;
