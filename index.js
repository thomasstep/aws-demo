module.exports.handler = (event, context, callback) => {
  console.log('Hello World!');
  const data = {
    statusCode: 200,
    body: JSON.stringify({
      hello: 'world with a code change',
    }),
  };
  callback(null, data);
}