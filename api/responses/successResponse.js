
  module.exports = function successResponse({ message, data }) {
    if (!data) {
      return {
        status: true,
        message,
      };
    } else {
      return {
        status: true,
        message,
        data,
      };
    }
  };