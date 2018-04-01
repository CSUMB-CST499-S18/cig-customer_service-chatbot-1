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

/**
 * builds object for validating SetupProcess intent
 */
function buildValidationResult(isValid, violatedSlot, messageContent) {
  console.log(`Building validation result for ${constants.SETUP_PROCESS_INTENT} intent`);
    if(isValid && messageContent == null) {
        return {
            isValid,
            violatedSlot
        };
    }

    return {
        isValid,
        violatedSlot,
        messageContent
    };
}

/**
 * validates SetupProcess intent
 */
function validateSetupProcess(processType) {
  console.log(`Validating ${constants.SETUP_PROCESS_INTENT} intent`);

    // user did not specify process type
    if(!processType) {
        var errorMessage = constants.NO_PROCESS_TYPE_PROVIDED;
        return buildValidationResult(false, constants.PROCESS_TYPE_SLOT, errorMessage);

    }

    // valid process
    return buildValidationResult(true, null, null);
}

/**
  * builds object for fulfilling SetupProcess intent
  */
function buildFulfillmentResult(fulfillmentState, messageContent) {
  console.log(`Building fulfillment result for ${constants.SETUP_PROCESS_INTENT} intent`);

  return {
    fulfillmentState,
    message: {
      contentType: 'PlainText',
      content: messageContent
    }
  };
}

/**
  * fulfills SetupProcess intent
  */
function fulfillSetup(processType) {
  console.log(`Fulfilling ${constants.SETUP_PROCESS_INTENT} intent`);
  return buildFulfillmentResult(
    constants.FULFILLED_STATUS,
    constants.SETUP_BOT_RESPONSE.replace('{0}', processType)
  );
}

module.exports = function(intentRequest, callback) {
    var processType = intentRequest.currentIntent.slots.processType;

    console.log(`${constants.PROCESS_TYPE_VAL} ${processType}`);

    // source of lambda invokation
    const source = intentRequest.invocationSource;

    // source of lambda invokation is Dialog Code Hook
    if(source === constants.DIALOG_CODE_HOOK) {

        console.log(`Source of lambda invokation: ${source}`);

        const slots = intentRequest.currentIntent.slots;
        const validationResult = validateSetupProcess(processType);

        // invalid result: prompt user for slot
        if(!validationResult.isValid) {
            slots[`${validationResult.violatedSlot}`] = null;
            callback(lexResponses.elicitSlot(
                intentRequest.sessionAttributes,
                intentRequest.currentIntent.name,
                slots,
                validationResult.violatedSlot,
                validationResult.messageContent));
        }

        // valid result: delegate the intent
        callback(lexResponses.delegate(
            intentRequest.sessionAttributes,
            intentRequest.currentIntent.slots));

        return;
    }

    // source of lambda invokation of Fulfillment Code Hook
    if(source === constants.FULFILL_CODE_HOOK) {

        console.log(`Source of lambda invokation: ${source}`);

        var fulfillmentResult = fulfillSetup(processType);

        callback(lexResponses.close(
          intentRequest.sessionAttributes,
          fulfillmentResult.fulfillmentState,
          fulfillmentResult.message
          ));
    }
}
