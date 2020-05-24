// snippet-start:[dynamodb.JavaScript.item.getItem]
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'eu-west-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});



// Call DynamoDB to read the item from the table
exports.handler = (event, context, callback) => {
  var params = {
  TableName: 'dagodz_tarkov',
  // Key: {
  //   'raidId': {S: event.raidId}
  // }
  //ProjectionExpression: 'outcome'
};
  ddb.scan(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      var response = [];
      data.Items.forEach (function(item) {
          response.push(AWS.DynamoDB.Converter.unmarshall(item)); // convert dynamoDB madness into normal JSON
      })
      return response;
    }
  })
};
