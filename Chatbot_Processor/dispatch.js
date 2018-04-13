/**
 * This is the dispatcher for the intents in the CIG_Chatbot bot, called by the main handler.
 * Author: Chanel Aquino
 * Date: 4/1/2018
 *
 * TODO: Dispatch to modularized code here (e.g., create files to handle each and every intent in the CIG_Chatbot bot).
 */

'use strict';

/**
 * files necessary for redirecting
 */
// constant variables
const constants = require('./constant-vars');


// all intents
const setupProcess = require('./SetupProcess_Intent/setupProcess');
const changeInformation = require('./ChangeInformation_Intent/changeInformation');
const greetCustomer = require('./Greeting_Intent/greetCustomer');
const differentPayment = require('./DifferentPayment_Intent/differentPayment');
// const getFeeInformation = require('./GetFeeInformation_Intent/getFeeInformation');
const getNoticeInfo = require('./GetNoticeInfo_Intent/getNoticeInfo');
const getCopy = require('./GetCopy_Intent/getCopy');
const getPolicyInfo = require('./GetPolicyInfo_Intent/getPolicyInfo');
// const makePayment = require('./MakePayment_Intent/makePayment');
// const retrievePaymentInfo = require('./RetrievePaymentInfo_Intent/retrievePaymentInfo');


console.log(`${constants.CURRENT_FILE} ${__filename}\n${constants.CURRENT_DIR} ${__dirname}`);

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
        console.log(`${constants.INTENT_TAG} ${intentName}`);
        return changeInformation(intentRequest, callback);
    }

    // Greeting intent
    if(intentName === constants.GREETING_INTENT) {
        return greetCustomer(intentRequest, callback);
    }
    
    // DifferentPayment intent
    if(intentName === constants.DIFFERENT_PAYMENT_INTENT) {
        console.log(`${constants.INTENT_TAG} ${intentName}`);
        return differentPayment(intentRequest, callback);
    }
    
    // GetNoticeInfo intent
    if(intentName === constants.GET_NOTICE_INFO_INTENT) {
        console.log(`${constants.INTENT_TAG} ${intentName}`);
        return getNoticeInfo(intentRequest, callback);
    }
    
    // GetCopy intent
    if(intentName === constants.GET_COPY_INTENT) {
        console.log(`${constants.INTENT_TAG} ${intentName}`);
        return getCopy(intentRequest, callback);
    }
    
    // GetCopy intent
    if(intentName === constants.GET_POLICY_INFO_INTENT) {
        console.log(`${constants.INTENT_TAG} ${intentName}`);
        return getPolicyInfo(intentRequest, callback);
    }

    // unsupported intent
    else {
        console.log(`${constants.ERROR_INTENT} ${intentName}`);
        return;
    }
}
