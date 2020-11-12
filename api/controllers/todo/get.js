module.exports = {


  friendlyName: 'Get',


  description: 'Get todo.',


  inputs: {

    id:{
      description: "The task id",
      type: "string",
      required: true
    }
  },

    exits: {
      badRequest:{
        description: "Cannot fetch task",
        requestType: 'badRequest'
      },

      success:{
        statusCode: 200,
        description: "The task has been fetched successfully"
      },

      notFound:{
        description: "Task does not exist",
        statusCode: 400
      }
    },


  fn: async function ({ id }, exits) {
try {
  //get the user id
  const user = this.user.id;
  
  //make sure the id of the task is the same as the user id
  const task = await Todo.findOne({id, owner: user.id});

  //if the task does not exist
  if(!task){
    exits.notFound({
     status: false,
     message: "task is not found"
    });
  }

  return exits.success({
    status: true,
    message: "Task fetched successfully",
    data: {
       task: task.task,
       id: task.id,
       done: task.done
    }
  });

} catch (error) {
  throw 'badrequest';
}
  },

};
