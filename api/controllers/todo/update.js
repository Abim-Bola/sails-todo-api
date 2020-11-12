module.exports = {
  friendlyName: "Update",

  description: "Update todo.",

  inputs: {
    task: {
      description: "The task to replace task in db",
      type: "string",
      required: true,
    },

    id: {
      description: "The id of the current task",
      type: "string",
      required: true,
    },
  },

    exits: {
      badRequest: {
        description: "Task could not be updated",
        requestType: "badRequest",
      },

      notFound: {
        description: "Task could not be found",
        statusCode: 404,
      },

      success: {
        description: "Task updated successfully",
        statusCode: 200,
      },
  },


  fn: async function ({ task, id }, exits) {
    try {
      const user = this.req.user;

      const taskExists = await Todo.findOne({ id, owner: user.id });

      if (!taskExists) {
        return exits.notFound({
          status: false,
          message: "Task does not exist",
        });
      }

      await Todo.update({
        id,
      }).set({
        task,
      });

      return exits.success({
        status: true,
        message: "todo updated successfully",
      });
    } catch (error) {
      throw "badRequest";
    }
  },
};
