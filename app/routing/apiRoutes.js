/*Your apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. 
This route will also be used to handle the compatibility logic.*/

//require the file to connect friends file to api routes

var friends = require("..data/friends");

//routing

module.exports = function(app) {


    //get 
    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });
    
      //post
    app.post("/api/friends", function(req, res){
        
        //code that analyzes comparison of inputs from dropdown menu to value of each monster. will evaluate absolute value of selected value sum vs. monster sum. 
          
        console.log(req.body);
       
       var surveyResults = req.body.scores; 
       var bestFriend = {};
       var minDiff = 100;
       for (var i = 0; i<friends.length; i++){
           
           var score = 0;
           for (var j = 0; j <surveyResults.length; j++){
                var question = Math.abs(surveyResults[j]-friends[i].scores[j]);
                score += question;
           }
           if (score < minDiff){
               minDiff = score;
               bestFriend = friends[i];
           }
       }

        res.json(bestFriend);

    })
};


















}