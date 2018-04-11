const constants = require('../constant-vars');
const handleFulfillmentCodeHook = require('./manageFulfillment');

module.exports = function makePaymentIntent(intentRequest,callback) {
    const sessionAttributes = intentRequest.sessionAttributes || {};
    //const slots = intentRequest.currentIntent.slots;
    //var bill = slots.Bill;
    
    callback(close(sessionAttributes, 'Fulfilled', {
        'contentType': 'PlainText',
        'content': 'You can pay your bill through ciginsurance.com, contacting your local agent, or contacting Client Services Billing Department at (877)200-4220'
    }));
}