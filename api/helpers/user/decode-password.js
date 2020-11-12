const jwt = require('jsonwebtoken');
module.exports = {
  friendlyName: "Decode Password",

  description: "Decodes the user password",

  inputs: {
    token: {
      description: "The user object",
      type: "string",
      required: true,
    },
  },

  exits:{

    success:{
        description: "Password decoded"
    }


  },


  fn: async function ({ token }) {

    try{
    
   const mainToken = token.replace('bearer', '');
   const user = await jwt.sign(token, sails.config.custom.jwtSecret);

   return user;

    } catch(error) {
        throw error;
    }
 },



};
