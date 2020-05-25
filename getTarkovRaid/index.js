// snippet-start:[dynamodb.JavaScript.item.getItem]
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'eu-west-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) => {
  var params = {
  TableName: 'dagodz_tarkov'
};

  function getData() {
    return new Promise((resolve, reject) => {
      ddb.scan(params, function(err, data) {
        var response = [];
        if (err) reject (err);
        data.Items.forEach (function(item){
          response.push(AWS.DynamoDB.Converter.unmarshall(item));
        })
        resolve(response);
      })
    })
  }
  
return getData();
  
};
