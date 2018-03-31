/**
 * This code executes the SetupProcess intent in the CIG_Chatbot bot. This intent can be invoked
 * in one of two ways: 1) as a lambda initialization and validation (i.e., code hook), or 2) as a fulfillment.
 * Author: Chanel Aquino
 * Date: 3/30/2018
 * 
 */
 
'use strict';

const lexResponses = require('./lexResponses');
const constants = require('./constant-vars.js');

console.log(`${constants.CURRENT_FILE} ${__filename}`);
console.log(`${constants.CURRENT_DIR} ${__dirname}`);

module.exports = function(intentRequest, callback) {
    var processType = intentRequest.currentIntent.slots.processType;
    
    console.log(`${constants.PROCESS_TYPE_VAL}: processType`);
    
    // source of lambda invokation
    const source = intentRequest.invocationSource;
    
    // source of lambda invokation is Dialog Code Hook
    if(source === constants.DIALOG_CODE_HOOK) {
        callback(lexResponses.delegate(intentRequest.sessionAttributes, intentRequest.currentIntent.slots));
        return;
    }
    
}