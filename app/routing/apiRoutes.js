/*Your apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. 
This route will also be used to handle the compatibility logic.*/

//what variables are needed? Creatures Array & survey results

var creaturesArray = require("../data/friends");
var userAnswers = require("../public/survey");

//routing

module.exports = function(app) {

    app.get("/api/creatures", function(req, res) {
        res.json(creaturesArray);
      });
    
      app.get("/api/survey", function(req, res) {
        res.json(userAnswers);
      });


















      
}