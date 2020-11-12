const jwt = require('jsonwebtoken');

module.exports = {

friendlyName : "Tokenize User",

description: 'Tokenize user during signup',

inputs:{
    user: {
       description: "Tokenizes a user",
       type:{
           email: "string",
           id: "string",
           name: "string",
       },
       required: true
    }
},



exits:{

    success:{
        description:"Tokenized"
    }

},


fn: async function ({ user }) {

     try{

    const {email, id, name} = user;
    

    //create token for user
    const token = await jwt.sign({email, id:user.id, name}, sails.config.custom.jwtSecret);

    console.log("from tokenize" + user);

    

    return token;

     }catch(error){

         throw error;
     }
  },

}