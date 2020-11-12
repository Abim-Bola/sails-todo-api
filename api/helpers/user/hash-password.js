const bcrypt = require('bcrypt');

module.exports = {
  friendlyName: "Hash Password",

  description: "Hashes password of user",

  inputs: {
    password: {
      description: "The password provided by the user during registeration",
      required: true,
      type: "string",
    },
  },

  exists: {
      success:{
          description: "Password successfully hashed",

      }
  },

  fn: async function ({ password }) {

    return bcrypt.hash(password, sails.config.custom.saltRounds);
    
  },
};
