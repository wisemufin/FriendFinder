var friendsData = require("../data/friends")

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var matchedFriend = {
      name: "",
      photo: "",
      lowestScore: 1000
    }

    var lowestScore = 100;
    // var totalDifference = 0;
    console.log(friendsData[0]);
    console.log(friendsData.score[0]);
    for (var i = 0; i < friendsData.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friendsData[i].score[j]; j++) {
        totalDifference += Math.abs(parseInt(friendsData[i].score[j]) - parseInt(req.body.score[j]));

        if(totalDifference < match.matchScore) {
          match.name = friendsData[i].name;
          match.photo = friendsData[i].photo;
          match.matchScore = totalDifference;
        }
      }
    }
    friendsData.push(req.body);
    res.json(matchedFriend);
  });
};
