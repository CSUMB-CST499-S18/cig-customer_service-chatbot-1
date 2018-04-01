/**
 * This is the dispatcher for the SetupProcess intent in the CIG_Chatbot bot, called by the main handler.
 * Author: Chanel Aquino
 * Date: 3/31/2018
 *
 * TODO: Dispatch to modularized code here (e.g., create files to handle each and every intent in the CIG_Chatbot bot).
 */

'use strict';

const setupProcess = require('./setupProcess');
const constants = require('./constant-vars');

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

    // unsupported intent
    else {
        var error = `${constants.ERROR_INTENT} ${intentName}`;
        console.log(error);
        throw new Error(error);
    }
}
