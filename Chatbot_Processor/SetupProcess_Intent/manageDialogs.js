/**
  * Handles SetupProcess intent's initialization and validation
  * Author: Chanel Aquino
  * Date: 4/1/2018
  */

'use strict';

const lexResponses = require('../lexResponses');
const constants = require('../constant-vars');
const handleFulfillmentCodeHook = require('./manageFulfillment');

console.log(`${constants.CURRENT_FILE} ${__filename}`);
console.log(`${constants.CURRENT_DIR} ${__dirname}`);

/**
 * builds object for validating SetupProcess intent
 */
function buildValidationResult(isValid, violatedSlot, messageContent) {
  console.log(`Building validation result for ${constants.SETUP_PROCESS_INTENT} intent`);
    
    if(isValid) {
      // either the user did not specify slot for processType, so one was provided for it
      // or the user did provide a slot, therefore no error message
      if(!violatedSlot || messageContent == null) {
        return {
            isValid,
            violatedSlot
        };
      }
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

    // processType slot not required; user did not specify process type
    if(!processType) {
        // var errorMessage = constants.NO_PROCESS_TYPE_PROVIDED;
        // return buildValidationResult(false, constants.PROCESS_TYPE_SLOT, errorMessage);

        console.log('User did not provided slot for setupprocess intent');
        // fulfill the SetupProcess intent
        return buildValidationResult(true, constants.PROCESS_TYPE_SLOT, null);
    }

    // valid process
    return buildValidationResult(true, null, null);
}

/**
  * handleDialogCodeHook(intentRequest)
  */
module.exports = function(intentRequest, callback) {
  console.log(`In ${constants.DIALOG_CODE_HOOK} for ${constants.SETUP_PROCESS_INTENT}`);

  var processType = intentRequest.currentIntent.slots.processType;
  console.log(`${constants.PROCESS_TYPE_VAL} ${processType}`);

  const slots = intentRequest.currentIntent.slots;
  const validationResult = validateSetupProcess(processType);

  // invalid result: prompt user for slot
  if(!validationResult.isValid) {
    console.log(`Validation is not valid: ${validationResult.isValid == false}`);
      slots[`${validationResult.violatedSlot}`] = null;
      callback(lexResponses.elicitSlot(
          intentRequest.sessionAttributes,
          intentRequest.currentIntent.name,
          slots,
          validationResult.violatedSlot,
          validationResult.messageContent)
      );
  }

  // valid result
  else {
    console.log(`Validation is not valid: ${validationResult.isValid == true}`);
    
    // user did not provide procesType slot; fulfill the intent
    if(validationResult.violatedSlot === constants.PROCESS_TYPE_SLOT) {
      console.log(`${constants.CURRENT_FILE} ${__filename}, with a valid result but not processType`);
      console.log(`Violated slot: ${validationResult.violatedSlot}`);
      return handleFulfillmentCodeHook(intentRequest, true, callback);
    }

    // user provided slot; delegate the intent
    else {
      callback(lexResponses.delegate(
        intentRequest.sessionAttributes,
        intentRequest.currentIntent.slots)
      );
    }
  }
}