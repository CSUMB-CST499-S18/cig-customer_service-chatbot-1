'use strict';

const constants = require('../constant-vars');
const lexResponses = require('../lexResponses');

function billDate() {
    var getDate = new Date();
    var month = getDate.getMonth() + 1;
    var day = constants.BILL_DAY;
    
    return dueDate = month + "/" + day;
}

function billMin() {
    var accountBalance = 1307;
    var monthlyDue = 130;
    var pastDue = 40;
    var lateFee = 20;
    
    return MIN_DUE = MONTHLY_DUE+PAST_DUE+LATE_FEE;
}


module.exports = function(intentRequest, callback) {
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    
    var MIN_DUE = constants.MONTHLY_DUE+constants.PAST_DUE+constants.LATE_FEE;
    var msg = "Hi, " + constants.FIRST_NAME + " " + constants.LAST_NAME 
                + ", your current minimum due is " + billMin() + " is due on " + billDate()
    
    callback(lexResponses.close(sessionAttributes, 'Fulfilled', {
        'contentType': 'PlainText',
        'content': msg
    }));
};