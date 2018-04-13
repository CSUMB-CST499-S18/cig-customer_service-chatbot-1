/**
  * Handles DifferentPayment intent's fulfillment
  * Author: Maria Loza
  * Date: 4/10/2018
  */

'use strict';

const constants = require('../constant-vars');
const lexResponses = require('../lexResponses');
const getBotResponse = require('./getBotResponse');

console.log(`${constants.CURRENT_FILE} ${__filename}`);
console.log(`${constants.CURRENT_DIR} ${__dirname}`);

/**
  * builds object for fulfilling DifferentPayment intent
  */
function buildFulfillmentResult(fulfillmentState, messageContent) {
  console.log(`Building fulfillment result for ${constants.DIFFERENT_PAYMENT_INTENT} intent`);

  return {
    fulfillmentState,
    message: {
      contentType: 'PlainText',
      content: messageContent
    }
  };
}

/**
  * fulfills DifferentPayment intent
  */
function fulfillDifferent(payType) {
  console.log(`Fulfilling ${constants.DIFFERENT_PAYMENT_INTENT} intent\n
    payType: ${payType}`);
  
  const bot_response = getBotResponse(payType);
  console.log(`bot response: ${bot_response}`);
  
  return buildFulfillmentResult(
    constants.FULFILLED_STATUS,
   bot_response
  );
}

/**
 * @param payType
 *    type of information that user wants to change
 * @return
 *    if payType is NULL (i.e., user did not provide one), return default info type
 *    else, return payType
 */
function getValidPayType(payType) {
  if(!payType) return constants.DEFAULT_PAY_TYPE;
  return payType;
}

/**
  * handleFulfillmentCodeHook(intentRequest)
  */
module.exports = function(intentRequest, callback) {

    console.log(`In ${constants.FULFILL_CODE_HOOK} from ${constants.DIALOG_CODE_HOOK}`);
    
    var payType = getValidPayType(intentRequest.currentIntent.slots.payType);
    var fulfillmentResult = fulfillDifferent(payType);
    
    callback(lexResponses.close(
      intentRequest.sessionAttributes,
      fulfillmentResult.fulfillmentState,
      fulfillmentResult.message
      )
    );

  }
