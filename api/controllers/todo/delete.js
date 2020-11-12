module.exports = {


  friendlyName: 'Delete',


  description: 'Delete todo.',


  inputs: {

    id:{
      description: "Id to be deleted",
      type: "string",
      required: true
    }

  },


  exits: {

    bedRequest:{
       requestType: "badRequest",
       description: "Task was not deleted from db"
    },

    notFound: {
description: "Task not found in db",
statusCode: 404
    },

    success: {
description: "Task succesfully deleted",
statusCode: 200
    }

  },


  fn: async function ({id, task}, exits) {
  



    try {

      const user = this.user.id;

      const taskExists = Todo.findOne({id, owner: user.id});

      if(!taskExists){
        return exits.notFound({
          status: false,
          message: "task does not exist"
        });

        await Todo.destroy({
          id
        });

        return exits.success({
         status: 200,
         message: "Task deleted"
        });
      }
      
    } catch (error) {
      throw 'badRequest';
    }

  }


};
