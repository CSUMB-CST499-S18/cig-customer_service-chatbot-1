/**
 * This code executes the GetNoticeInfo intent in the CIG_Chatbot bot. This intent can be invoked
 * in one way: 1) as a fulfillment.
 * Author: Maria Loza
 * Date: 4/12/2018
 *
 */

'use strict';

const constants = require('../constant-vars');
const handleFulfillmentCodeHook = require('./manageFulfillment');
const lexResponses = require('../lexResponses');

module.exports = function(intentRequest, callback) {

    // source of lambda invokation
    const source = intentRequest.invocationSource;
    console.log(`Source of lambda invokation: ${source}`);

    // source of lambda invokation of Fulfillment Code Hook
    if (source === constants.FULFILL_CODE_HOOK) {
        return handleFulfillmentCodeHook(intentRequest, callback);
    }
}
