'use strict';

const constants = require('../constant-vars');
const lexResponses = require('../lexResponses');

const obj = require('../mock-payload.json');

function billDate() {
    var getDate = new Date();
    var month = getDate.getMonth() + 1;
    var day = constants.BILL_DAY;
    
    return month + "/" + day;
}

function extract(data) {
   const bills = obj['billing']['accounts'];
   for(var bill in bills) {
     return bills[bill]['billingSummary'];
   }
}

function billMin(obj) {
  var accountBalance = obj.accountBalance;
  var pastDue = parseFloat(obj.pastDue.substr(0,5));
  if(pastDue>0) {
    var lateFee = 20.00;
  } else {
    var lateFee = 0;
  }
  return pastDue+lateFee+130;
}


module.exports = function(intentRequest, callback) {
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    
    var billingObj = extract(obj);
    
    var MIN_DUE = constants.MONTHLY_DUE+constants.PAST_DUE+constants.LATE_FEE;
    var msg = "Hi, " + constants.FIRST_NAME + " " + constants.LAST_NAME 
                + ", your current minimum due is " + billMin(billingObj) + " is due on " + billDate()
    
    callback(lexResponses.close(sessionAttributes, 'Fulfilled', {
        'contentType': 'PlainText',
        'content': msg
    }));
};