module.exports = {
  friendlyName: "Login",

  description: "Login user.",

  inputs: {

    password: {
      description: "The login password of the user",
      type: "string",
      required: true,
    },

    email: {
      description: "The login email of the user",
      type: "string",
      required: true,
      isEmail: true,
      unique: true
    },

  
  },

  exits: {
    success:{
      description: "User was successfully logged in",
      statusCode: 200
    },

    badRequest:{
      description: "This user could not be logged in",
      requestType: 'badRequest'
      
    },

    conflict:{
      description: "This User does not exist",
      statusCode: 409
    }
  },

  fn: async function ({email, password}, exits) {
    
    try {
      //if user exists
 const user = await User.findOne({
   email
  });
 
 if(!user){
   return exits.conflict({
status: false,
message: "User does not exist"
   });
 }

 const validPassword = await sails.helpers.user.validatePassword.with({ 

   password, 
  hashedPassword: user.password
});

if(!validPassword){

  return exits.conflict({
status: false,
message: "email or password is invalid"
  });
}

//tokenize user
const token = await sails.helpers.user.tokenizeUser.with({
  user
});

return exits.success({
status: 200,
message: "Successfully logged in",
data: {
  token,
},
});



    } catch (error) {
      
      throw 'badRequest';
    }
  },
};
