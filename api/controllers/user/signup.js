const tokenizeUser = require("../../helpers/user/tokenize-user");

module.exports = {
  friendlyName: "Signup",

  description: "Signup user.",

  inputs: {
    email: {
      description: "The registration email of the user",
      type: "string",
      required: true,
      isEmail: true,
      unique: true,
    },

    name: {
      description: "The registration name of the user",
      type: "string",
      required: true,
    },

    password: {
      description: "The registration password of the user",
      type: "string",
      required: true,
    },
  },

  exits: {
    badRequest: {
      requestType: "badRequest",
      description: "Could not signup user",
    },

    conflicts: {
      statusCode: 409,
      description: "User already Exists",
    },

    success: {
      description: "User successfully signedup",
      statusCode: 200,
    },
  },

  fn: async function ({ email, password, name }, exits) {
    try {
      //check is user exists
      const userExists = await User.findOne({ email });

      if (userExists) {
        return exits.conflict({
          status: true,
          message: "User exists",
        });
      }
      //encrypt password
      const hashPassword = await sails.helpers.user.hashPassword.with({ password });

      //sign up user

      await User.create({
        name,
        password: hashPassword,
        email
      });

      //send success message
      return exits.success({
        status: true,
        message: "User Signed up",
      });
    } catch (error) {
      throw "badRequest";
    }
  },
};
