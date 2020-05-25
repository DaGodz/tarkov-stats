exports.handler = async (event, context, callback) => {
    var json = event.responsePayload;
    var extractedText = json["ExtractedText"];
    console.log(json);
    var playerName = "NGB";
    var playerNameMatch = new RegExp(playerName);
    var match = playerNameMatch.exec(extractedText);
    if (match) {
        var playerType = "PMC";
    } else {
        var playerType = "Scav";
    }
    
    var raidOutcomeMatch = /(RAID TIME:* )((\w+ ){1,3})/g;
    match = raidOutcomeMatch.exec(extractedText);
    var raidOutcome = match[2].toLowerCase();
    if (raidOutcome.includes("action")){
        raidOutcome = "KIA";
    } else if (raidOutcome.includes("survived")) {
        raidOutcome = "Survived";
    } else if (raidOutcome.includes("through")) {
        raidOutcome = "Run Through";
    } else {
        raidOutcome = "Unclear";
    }
    
    if (playerType == "PMC") {
        var currentLevelMatch = /(EARLY TERMINATION )(\w+)/g;
        match = currentLevelMatch.exec(extractedText);
        var currentLevel = match[2];
    }
    
    if (raidOutcome == "KIA") {
        var deathLocationMatch = /(\((\w+,* *)*\))/g;
        match = deathLocationMatch.exec(extractedText);
        var deathLocation = match[1].substring(1,match[1].length-1);
    }
    
    var durationMatch = /(\d{2}:\d{2}:\d{2})/g;
    match = durationMatch.exec(extractedText);
    var duration = match[1].trim();
    //var colonMatch = /:/g; // regex doesn't work inline in a .replace function
    //var duration = duration.replace(colonMatch,"");
    var hours = Number(duration.substring(0,2));
    var minutes = Number(duration.substring(3,5));
    var seconds = Number(duration.substring(6,8));
    duration = String((hours * 3600) + (minutes * 60) + seconds);
    
    var xpMatch = /(EXP )([0-9, ]*)/g;
    match = xpMatch.exec(extractedText);
    var xp = match[2].replace(" ","").trim();
    
    var response = {
          "timestamp": String(Date.now()),
          "user": "vyper",
          "playerType": playerType,
          "outcome": raidOutcome,
          "duration": duration,
          "xp": xp,
          "deathLocation": deathLocation,
          "currentLevel": currentLevel
        };
    return response;
};