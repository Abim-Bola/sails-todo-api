const successResponse =require('../responses/successResponse');
const errorResponse = require('../responses/errorResponse')
module.exports = {
  friendlyName: "Todo",

  description: "Todo something.",

  inputs: {
    firstName: {
      type: "string",
      required: true,
      description: "persons name",
    },
  },

  exits: {
    badRequest:{
      description:'This todo could nit be created',
      responseType:'badRequest'
    },
    success:{
      statusCode:201,
      description:'todo list created successfully'
    }
  },

  fn: async function ({ firstName }, exits) {
    try {

      //Algorithm
      console.log(firstName);
     const sum = await sails.helpers.calculateSum.with({firstInteger:20,secondInteger:20});
     console.log(sum);

      return exits.success(
        successResponse({message:'todo successful'})  
      )
    } catch (error) {
      const messgae =error.message ? error.messaage : 'çould not create todo list';
      throw Error(
        exits.badRequest(
          errorResponse({message: 'todo unsuccessful'})
        )
      )
    }
  },
};
