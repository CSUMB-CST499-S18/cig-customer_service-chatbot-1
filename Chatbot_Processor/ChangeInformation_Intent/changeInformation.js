/**
 * This code executes the ChangeInformation intent in the CIG_Chatbot bot. This intent can be invoked
 * in one of two ways: 1) as a lambda initialization and validation (i.e., code hook), or 2) as a fulfillment.
 * Author: Chanel Aquino
 * Date: 4/3/2018
 *
 */

'use strict';

const constants = require('../constant-vars');
const handleDialogCodeHook = require('./manageDialogs');
const handleFulfillmentCodeHook = require('./manageFulfillment');

module.exports = function(intentRequest, callback) {

    // source of lambda invokation
    const source = intentRequest.invocationSource;
    console.log(`Source of lambda invokation: ${source}`);

    // source of lambda invokation is Dialog Code Hook
    if(source === constants.DIALOG_CODE_HOOK) {
        return handleDialogCodeHook(intentRequest, callback);
    }

    // source of lambda invokation of Fulfillment Code Hook
    if(source === constants.FULFILL_CODE_HOOK) {
        return handleFulfillmentCodeHook(intentRequest, callback);
    }
}
