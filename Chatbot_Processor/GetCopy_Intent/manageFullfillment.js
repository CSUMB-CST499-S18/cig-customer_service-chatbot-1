/**
  * Handles GetCopy intent's fulfillment
  * Author: Maria Loza
  * Date: 4/12/2018
  */

'use strict';

const constants = require('../constant-vars');
const lexResponses = require('../lexResponses');
const getBotResponse = require('./getBotResponse');

console.log(`${constants.CURRENT_FILE} ${__filename}\n
  ${constants.CURRENT_DIR} ${__dirname}`);


/**
  * builds object for fulfilling GetCopy intent
  */
function buildFulfillmentResult(fulfillmentState, messageContent) {
  console.log(`Building fulfillment result for ${constants.GET_COPY_INTENT} intent`);

  return {
    fulfillmentState,
    message: {
      contentType: 'PlainText',
      content: messageContent
    }
  };
}



/**
  * fulfills GetCopy intent
  */
function fulfillCopy(payType) {
  console.log(`Fulfilling ${constants.GET_COPY_INTENT} intent\n
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

  var payType = getValidPayType(intentRequest.currentIntent.slots.payType);
  var fulfillmentResult = fulfillCopy(payType);

  callback (lexResponses.close(
    intentRequest.sessionAttributes,
    fulfillmentResult.fulfillmentState,
    fulfillmentResult.message
    )
  );
}
