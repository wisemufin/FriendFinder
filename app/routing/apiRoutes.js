var friendsData = require("../data/friends")
console.log(friendsData[0]);
console.log(friendsData[0].score[0]);


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
    console.log(friendsData[0].score[0]);
    for (var i = 0; i < friendsData.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friendsData[i].score.length; j++) {
        totalDifference += Math.abs(parseInt(friendsData[i].score[j]) - parseInt(req.body.score[j]));

        if(totalDifference < matchedFriend.lowestScore) {
          matchedFriend.name = friendsData[i].name;
          matchedFriend.photo = friendsData[i].photo;
          matchedFriend.matchScore = totalDifference;
        }
      }
    }
    friendsData.push(req.body);
    res.json(matchedFriend);
  });
};
