console.log('Loading function');
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) => {
    console.log(JSON.stringify(event, null, '  '));
    var tableName = "dagodz_tarkov";    
    var payload = event.responsePayload;
    var myItem = {
            "raidId": {S: context.awsRequestId}, //mandatory
            "timestamp": {S: payload.timestamp}, //mandatory
            "user": {S: payload.user}, //mandatory
            "playerType": {S: payload.playerType}, //mandatory
            "outcome": {S: payload.outcome}, //mandatory
            "duration": {N: payload.duration} //mandatory
        };
        
    if (payload.xp) {
        myItem.xp = {N: payload.xp};
    }
    
    if (payload.deathLocation) {
        myItem.deathLocation = {S: payload.deathLocation};
    }
    
    if (payload.currentLevel) {
        myItem.currentLevel = {N: payload.currentLevel};
    }

    dynamodb.putItem({
        "TableName": tableName,
        "Item" : myItem
        }
    , function(err, data) {
        if (err) {
            console.log('Error putting item into dynamodb failed: '+err);
            context.done('error');
        }
        else {
            console.log('Great success: '+JSON.stringify(data, null, '  '));
        }
    });
};