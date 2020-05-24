console.log('Loading function');
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) => {
    console.log(JSON.stringify(event, null, '  '));
    var tableName = "dagodz_tarkov";    
    var payload = event.responsePayload
    dynamodb.putItem({
        "TableName": tableName,
        "Item" : {
            "raidId": {S: context.awsRequestId},
            "timestamp": {S: payload.timestamp},
            "user": {S: payload.user},
            "playerType": {S: payload.playerType},
            "outcome": {S: payload.outcome},
            "duration": {N: payload.duration},
            "xp": {N: payload.xp},
            "deathLocation": {S: payload.deathLocation},
            "currentLevel": {N: payload.currentLevel}
            
        }
    }, function(err, data) {
        if (err) {
            console.log('Error putting item into dynamodb failed: '+err);
            context.done('error');
        }
        else {
            console.log('Great success: '+JSON.stringify(data, null, '  '));
        }
    });
};