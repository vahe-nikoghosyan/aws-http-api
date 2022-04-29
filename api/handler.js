'use strict';

module.exports.get = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Function executed successfully!\n I am glad to be joining the team',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.post = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Function executed successfully!',
                input: event,
            },
            null,
            2
        ),
    };
};
