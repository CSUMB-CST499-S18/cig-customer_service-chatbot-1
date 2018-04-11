// Function for getting payment amount and date
const constants = require('../constant-vars');
const handleFulfillmentCodeHook = require('./manageFulfillment');

module.exports = function paymentInfoIntent(intentRequest, callback) {
    const sessionAttributes = intentRequest.sessionAttributes || {};
    const slots = intentRequest.currentIntent.slots;
    const infoType = slots.value;
    
    if (infoType === 'date') {
        // return getBalance();
        callback(close(sessionAttributes, 'Fulfilled', {
            'contentType': 'PlainText',
            'content': 'Youre due date is currently set for the 4th of every month by 4PM(PST/PDT)'
        }));
    } else {
        // return getDueDate();
        callback(close(sessionAttributes, 'Fulfilled', {
            'contentType': 'PlainText',
            'content': 'Youre minimum payment is 190.00USD'
        }));
    }
}