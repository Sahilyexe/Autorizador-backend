// Create clients and set shared const values outside of the handler.


/**
 * A simple example includes a HTTP get method to get one item by id from a DynamoDB table.
 */
exports.login = async (event) => {
  if (event.httpMethod !== 'GET') {
    throw new Error(`getMethod only accept GET method, you tried: ${event.httpMethod}`);
  }
  // All log statements are written to CloudWatch
  console.info('received:', event);
 
 
  const response = {
    statusCode: 200,
    headers:{
      "Access-Control-Allow-Headers" : "X-PINGOTHER,Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      "Content-Type":'application/json'
    },
    body: JSON.stringify('autenticado!')
  };
 
  console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
  return response;
}
