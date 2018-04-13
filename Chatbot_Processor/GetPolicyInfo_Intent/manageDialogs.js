/**
  * Handles GetPolicyInfo intent's initialization and validation
  * Author: Maria Loza
  * Date: 4/12/2018
  */

'use strict';

const lexResponses = require('../lexResponses');
const constants = require('../constant-vars');
const handleFulfillmentCodeHook = require('./manageFulfillment');

console.log(`${constants.CURRENT_FILE} ${__filename}`);
console.log(`${constants.CURRENT_DIR} ${__dirname}`);

/**
 * builds object for validating GetPolicyInfo intent
 */
function buildValidationResult(isValid, violatedSlot, messageContent) {
  console.log(`Building validation result for ${constants.GET_POLICY_INFO_INTENT} intent`);

    if (isValid) {
      // either the user did not specify slot for informationType, so one was provided for it
      // or the user did provide a slot, therefore no error message
      if (!violatedSlot || messageContent == null) {
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
 * validates ChangeInformation intent
 */
function validateChangeInformation(polSyn) {
  console.log(`Validating ${constants.GET_POLICY_INFO_INTENT} intent`);

    // polSyn slot not required; user did not specify information type
    if(!polSyn) {
        console.log('User did not provided slot for polSyn intent');
        return buildValidationResult(true, constants.POL_SYN_SLOT, null); // fulfill the ChangeInformation intent
    }

    // valid process
    return buildValidationResult(true, null, null);
}

/**
  * handleDialogCodeHook(intentRequest)
  */
module.exports = function(intentRequest, callback) {
  console.log(`In ${constants.DIALOG_CODE_HOOK} for ${constants.GET_POLICY_INFO_INTENT}`);

  var polSyn = intentRequest.currentIntent.slots.polSyn;
  console.log(`${constants.INFORMATION_TYPE_VAL} ${polSyn}`);

  const slots = intentRequest.currentIntent.slots;
  const validationResult = validateChangeInformation(polSyn);

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
    console.log(`Validation is valid: ${validationResult.isValid == true}`);

    // user did not provide polSyn slot; fulfill the intent
    if (validationResult.violatedSlot === constants.POL_SYN_SLOT) {
      console.log(`${constants.CURRENT_FILE} ${__filename}, with a valid result but not polSyn \n
        Violated slot: ${validationResult.violatedSlot}`);
      return handleFulfillmentCodeHook(intentRequest, callback);
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
