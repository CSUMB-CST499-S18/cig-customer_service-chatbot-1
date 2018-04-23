'use strict';

const constants = require('../constant-vars');
const lexResponses = require('../lexResponses');

module.exports = function(intentRequest, callback) {
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    const bill = slots.bill;
    
    var options = {};
    options["Online"] = "You can pay online at www.ciginsurance.com";
    options["Billing Services"] = "You can pay by telephone at (877) 200-4220";
    
    callback(lexResponses.close(sessionAttributes, 'Fulfilled', {
        'contentType': 'PlainText',
        'content': options[bill]
    }));
}