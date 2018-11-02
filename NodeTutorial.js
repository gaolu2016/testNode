var Tutor = require('./Tutorial.js');
module.exports.NodeTutorial = function () {
    console.log("Node Tutorial")
    this.pTutor = function() {
        var PTutor = Tutor
        PTutor.tutorial();
    }
}