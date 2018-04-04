/**
  * Handles ChangeInformation intent's initialization and validation
  * Author: Chanel Aquino
  * Date: 4/3/2018
  */

'use strict';

const lexResponses = require('../lexResponses');
const constants = require('../constant-vars');
const handleFulfillmentCodeHook = require('./manageFulfillment');

console.log(`${constants.CURRENT_FILE} ${__filename}`);
console.log(`${constants.CURRENT_DIR} ${__dirname}`);

/**
 * builds object for validating ChangeInformation intent
 */
function buildValidationResult(isValid, violatedSlot, messageContent) {
  console.log(`Building validation result for ${constants.CHANGE_INFO_INTENT} intent`);

    if(isValid) {
      // either the user did not specify slot for informationType, so one was provided for it
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
 * validates ChangeInformation intent
 */
function validateChangeInformation(informationType) {
  console.log(`Validating ${constants.CHANGE_INFO_INTENT} intent`);

    // informationType slot not required; user did not specify information type
    if(!informationType) {
        console.log('User did not provided slot for informationType intent');
        return buildValidationResult(true, constants.INFORMATION_TYPE_SLOT, null); // fulfill the ChangeInformation intent
    }

    // valid process
    return buildValidationResult(true, null, null);
}

/**
  * handleDialogCodeHook(intentRequest)
  */
module.exports = function(intentRequest, callback) {
  console.log(`In ${constants.DIALOG_CODE_HOOK} for ${constants.CHANGE_INFO_INTENT}`);

  var informationType = intentRequest.currentIntent.slots.informationType;
  console.log(`${constants.INFORMATION_TYPE_VAL} ${informationType}`);

  const slots = intentRequest.currentIntent.slots;
  const validationResult = validateChangeInformation(informationType);

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
    if(validationResult.violatedSlot === constants.INFORMATION_TYPE_SLOT) {
      console.log(`${constants.CURRENT_FILE} ${__filename}, with a valid result but not informationType \n
        Violated slot: ${validationResult.violatedSlot}`);
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
