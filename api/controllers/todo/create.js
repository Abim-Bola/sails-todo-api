const successResponse =require('../../responses/successResponse');
const errorResponse = require('../../responses/errorResponse');

module.exports = {
  friendlyName: "Create",

  description: "Create todo.",

  inputs: {

    task: {
      description: "Task to be added by user",
      required: true,
      type: "string",
    },

    // owner:{
    //   type:"string",
    //   required: true
    // }
  },

  exits: {

    success: {
      description: "task added successfully",
      statuscode: 201,
    },

    badRequest: {
      description: "Task could not be added",
      requestType: "badRequest",
    },
  },

  fn: async function ({ task }, exits) {
    // All done.
    try {

      //get user id
     
      const user = this.req.user;

      console.log("user is undefined" + " " + user);
      
  
      //create the task along with the user id
      await Todo.create({
        task,
        owner: user.id
      });
//return success message
      return exits.success({
            status: true,
            message: "Task added successfully"
      });


    } catch (error) {

      console.log(error);
        throw 'badRequest';
        

    }
  },
};
