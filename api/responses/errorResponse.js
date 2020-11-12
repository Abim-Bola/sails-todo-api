module.exports = function errorResponse({ message, data }) {
    if (!data) {
      return {
        status: false,
        message,
      };
    } else {
      return {
        status: false,
        message,
        data,
      };
    }
  };
