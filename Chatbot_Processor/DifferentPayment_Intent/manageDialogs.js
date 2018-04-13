/**
  * Handles DifferentPayment intent's initialization and validation
  * Author: Maria Loza
  * Date: 4/10/2018
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
function buildvalidateDifferentPayment(isValid, violatedSlot, messageContent) {
  console.log(`Building validation result for ${constants.DIFFERENT_PAYMENT_INTENT} intent`);
    
    if (isValid) {
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
 * validates DifferentPayment intent
 */
function validateDifferentPayment(diffSlot) {
  console.log(`Validating ${constants.DIFFERENT_PAYMENT_INTENT} intent`);

    // diffSlot slot not required; user did not specify diffSlot type
    if (!diffSlot) {
        // var errorMessage = constants.NO_PROCESS_TYPE_PROVIDED;
        // return buildvalidateDifferentPayment(false, constants.PAY_TYPE_SLOT, errorMessage);

        console.log('User did not provided slot for differentpayment intent');
        // fulfill the DifferentPayment intent
        if (diffSlot == 'payment') {
            return buildvalidateDifferentPayment(true, constants.PAY_TYPE_SLOT, null);
        } else {
            return buildvalidateDifferentPayment(true, constants.VALUE_SLOT, null);
        }
    }

    // valid process
    return buildvalidateDifferentPayment(true, null, null);
}

/**
  * handleDialogCodeHook(intentRequest)
  */
module.exports = function(intentRequest, callback) {
  console.log(`In ${constants.DIALOG_CODE_HOOK} for ${constants.DIFFERENT_PAYMENT_INTENT}`);

  var payType = intentRequest.currentIntent.slots.payType;
  var value = intentRequest.currentIntent.slots.value;
  console.log(`${constants.PAY_TYPE_VAL} ${payType}`);
  console.log(`${constants.VALUE_VAL} ${value}`);

  const slots = intentRequest.currentIntent.slots;
  const validatePaymentType = validateDifferentPayment(payType);
  const validateDifferentValue = validateDifferentPayment(value);
  
  // invalid result: prompt user for slot: payType
  if(!validatePaymentType.isValid) {
    console.log(`Validation, payType, is not valid: ${validatePaymentType.isValid == false}`);
      slots[`${validatePaymentType.violatedSlot}`] = null;
      callback(lexResponses.elicitSlot(
          intentRequest.sessionAttributes,
          intentRequest.currentIntent.name,
          slots,
          validatePaymentType.violatedSlot,
          validatePaymentType.messageContent)
      );
  }
  
  // invalid result: prompt user for slot: value
  if(!validateDifferentValue.isValid) {
    console.log(`Validation, value, is not valid: ${validateDifferentValue.isValid == false}`);
      slots[`${validateDifferentValue.violatedSlot}`] = null;
      callback(lexResponses.elicitSlot(
          intentRequest.sessionAttributes,
          intentRequest.currentIntent.name,
          slots,
          validateDifferentValue.violatedSlot,
          validateDifferentValue.messageContent)
      );
  }

  // valid result
  else {
    console.log(`Validation is valid: ${validatePaymentType.isValid == true}`);
    
    // user did not provide procesType slot; fulfill the intent
    if (validatePaymentType.violatedSlot === constants.PAY_TYPE_SLOT && validateDifferentValue.violatedSlot === constants.VALUE_SLOT) {
      console.log(`${constants.CURRENT_FILE} ${__filename}, with a valid result but not processType`);
      console.log(`Violated slot - payType: ${validatePaymentType.violatedSlot}`);
      console.log(`Violated slot - value: ${validateDifferentValue.violatedSlot}`);
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