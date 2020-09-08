module.exports.handler = (event, context, callback) => {
  console.log('Hello World!');
  const data = {
    statusCode: 200,
    body: JSON.stringify({
      hello: 'world',
    }),
  };
  callback(null, data);
}