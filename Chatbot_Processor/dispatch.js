/**
 * This is the dispatcher for the intents in the CIG_Chatbot bot, called by the main handler.
 * Author: Chanel Aquino
 * Date: 4/1/2018
 *
 * TODO: Dispatch to modularized code here (e.g., create files to handle each and every intent in the CIG_Chatbot bot).
 */

'use strict';

const constants = require('./constant-vars');
const setupProcess = require('./SetupProcess_Intent/setupProcess');
const differentPayment = require('./DifferentPayment_Intent/differentPayment');



console.log(`${constants.CURRENT_FILE} ${__filename}`);
console.log(`${constants.CURRENT_DIR} ${__dirname}`);


module.exports = function(intentRequest, callback) {
    console.log(`${constants.DISPATCH_TAG} ${intentRequest.userId}, ${constants.INTENT_TAG} ${intentRequest.currentIntent.name}`);

    const intentName = intentRequest.currentIntent.name;

    // SetupProcess intent
    if(intentName === constants.SETUP_PROCESS_INTENT) {
        console.log(`${constants.INTENT_TAG} ${intentName}`);
        return setupProcess(intentRequest, callback);
    }

    // ChangeInformation intent
    if(intentName === constants.CHANGE_INFO_INTENT) {
        // do something
    }
    
    // DifferentPayment intent
    if(intentName === constants.DIFFERENT_PAYMENT_INTENT) {
        console.log(`${constants.INTENT_TAG} ${intentName}`);
        return differentPayment(intentRequest, callback);
    }

    // unsupported intent
    else {
        console.log(`${constants.ERROR_INTENT} ${intentName}`);
        return;
    }
}
