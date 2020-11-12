const bcrypt = require("bcrypt");

module.exports = {

  friendlyName: "Validate Password",

  description: "Compared password of user",

  inputs: {
    password: {
      description: "The password entered by user during signin",
      required: true,
      type: "string",
    },

    hashedPassword: {
      description: "Hashed password in the database",
      required: true,
      type: "string",
    },
  },

  exists: {
    success: {
      description: "Password successfully hashed",
    },
  },

  fn: async function ({ password, hashedPassword }) {

    return bcrypt.compare(password, hashedPassword);
    
  },
};
