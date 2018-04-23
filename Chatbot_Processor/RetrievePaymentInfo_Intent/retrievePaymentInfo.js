'use strict'

const constants = require('../constant-vars');
const handleFulfillmentCodeHook = require('./manageFulfillment');

module.exports = function(intentRequest, callback) {
    // source of lambda invokation
    const source = intentRequest.invocationSource;
    console.log(`Source of lambda invokation: ${source}`);
    
    if(source === constants.FULFILL_CODE_HOOK) {
        return handleFulfillmentCodeHook(intentRequest, callback);
    }
}