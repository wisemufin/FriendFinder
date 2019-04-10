var friendsData = require("../data/friends")

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var lowestScore = 1000;
    for (var i = 0; i < friendsData.length; i++) {
      var currentScore = 0;
      for(var j = 0; j < friendsData[i].score.length; j++) {
        currentScore += friendsData[i].score[j] - req.body.score[j]
      }
    }
    friendsData.push(req.body);
  });
};
