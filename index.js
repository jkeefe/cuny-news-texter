// news-bot!

var twilio = require('twilio');
var mongodb = require('mongodb');

module.exports = function(request) {
  
  return new Promise(function(fulfill, reject){

    // functional code goes in here
    
    var text_to_text = "Hi back!";
    var reply = formatReply(text_to_text);
    
    fulfill(reply);

  });
  
};

var formatReply = function(text_message){
  
    // build the XML to send back to Twilio
    var twiml = new twilio.TwimlResponse();
    twiml.message(text_message);

    // return the XML
    return(twiml.toString());
  
};